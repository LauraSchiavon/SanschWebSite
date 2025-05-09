"use client"

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

type ParticlesProps = {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
  colors?: string[]
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
  colors = ["#FCA311", "#14213D"]
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const particles = useRef<any[]>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const touch = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  const onMouseMove = (e: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = e.clientX - rect.left - w / 2
      const y = e.clientY - rect.top - h / 2
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }
  }

  const onTouchMove = (e: TouchEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = e.touches[0].clientX - rect.left - w / 2
      const y = e.touches[0].clientY - rect.top - h / 2
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
      if (inside) {
        touch.current.x = x
        touch.current.y = y
      }
    }
  }

  const createParticles = () => {
    const { w, h } = canvasSize.current
    particles.current = []
    for (let i = 0; i < quantity; i++) {
      const x = Math.random() * w - w / 2
      const y = Math.random() * h - h / 2
      const vx = Math.random() - 0.5
      const vy = Math.random() - 0.5
      const size = Math.random() * 2 + 1
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.current.push({
        x,
        y,
        vx,
        vy,
        size,
        color,
        origX: x,
        origY: y,
      })
    }
  }

  const drawParticles = () => {
    if (!context.current) return
    const { w, h } = canvasSize.current
    
    context.current.clearRect(-w / 2, -h / 2, w, h)
    
    for (let i = 0; i < particles.current.length; i++) {
      const p = particles.current[i]
      const { x, y, size, color } = p
      
      context.current.beginPath()
      context.current.arc(x, y, size, 0, Math.PI * 2)
      context.current.fillStyle = color
      context.current.fill()
    }
  }

  const updateParticles = () => {
    const { w, h } = canvasSize.current
    
    for (let i = 0; i < particles.current.length; i++) {
      const p = particles.current[i]
      const { x, y, vx, vy, size, origX, origY } = p
      
      // Apply forces from mouse and touch
      let dx = mouse.current.x - x
      let dy = mouse.current.y - y
      const dist = Math.sqrt(dx * dx + dy * dy)
      
      // Smoothly transition back to original position
      const fx = (origX - x) / staticity
      const fy = (origY - y) / staticity
      
      let ax = fx
      let ay = fy
      
      // Apply force from mouse/touch if it's close enough
      if (dist < 120) {
        const force = -120 / dist
        ax += dx * force / ease
        ay += dy * force / ease
      }
      
      // Update velocity, position
      p.vx = vx * 0.9 + ax
      p.vy = vy * 0.9 + ay
      p.x = x + p.vx
      p.y = y + p.vy
      
      // Boundary check - bounce off the edges
      if (p.x < -w/2 || p.x > w/2) p.vx = -p.vx * 0.5
      if (p.y < -h/2 || p.y > h/2) p.vy = -p.vy * 0.5
    }
  }

  const animate = () => {
    updateParticles()
    drawParticles()
    requestAnimationFrame(animate)
  }

  const initCanvas = () => {
    if (!canvasRef.current || !canvasContainerRef.current) return
    
    const container = canvasContainerRef.current
    const canvas = canvasRef.current
    context.current = canvas.getContext("2d")
    
    const { width, height } = container.getBoundingClientRect()
    const w = width
    const h = height
    const realWidth = w * dpr
    const realHeight = h * dpr
    canvasSize.current = { w, h }
    
    canvas.width = realWidth
    canvas.height = realHeight
    
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    
    if (context.current) {
      context.current.scale(dpr, dpr)
      context.current.translate(w / 2, h / 2)
    }
    
    createParticles()
    animate()
  }

  useEffect(() => {
    initCanvas()
    
    window.addEventListener("resize", initCanvas)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("touchmove", onTouchMove)
    
    return () => {
      window.removeEventListener("resize", initCanvas)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove", onTouchMove)
    }
  }, [])

  useEffect(() => {
    if (refresh) {
      initCanvas()
    }
  }, [refresh])

  return (
    <div
      className={cn("fixed top-0 left-0 w-full h-full overflow-hidden", className)}
      ref={canvasContainerRef}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}