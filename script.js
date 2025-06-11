// Import necessary libraries
import AOS from "aos"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

document.addEventListener("DOMContentLoaded", () => {

  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })

  setTimeout(() => {
    const preloader = document.getElementById("preloader")
    if (preloader) {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    }
  }, 1500)

  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  gsap.from(".hero-section h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
  })

  gsap.from(".hero-section .lead", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8,
  })

  gsap.from(".hero-section .btn", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1.1,
  })

  gsap.to(".dancer-shadow", {
    rotation: 5,
    y: -20,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  })

  gsap.registerPlugin(ScrollTrigger)

  gsap.from(".sinopsis-text", {
    scrollTrigger: {
      trigger: ".sinopsis-text",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  })

  gsap.from(".parallax-quote", {
    scrollTrigger: {
      trigger: ".parallax-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
  })
  gsap.from(".gallery-item", {
    scrollTrigger: {
      trigger: "#galeria",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
  })

  gsap.from(".date-card", {
    scrollTrigger: {
      trigger: "#fechas",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
  })

  gsap.from(".team-member", {
    scrollTrigger: {
      trigger: "#equipo",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
  })

  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: "#contacto",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
  })
  const dancerElements = document.querySelectorAll("section")
  dancerElements.forEach((section) => {
    const dancer = document.createElement("div")
    dancer.classList.add("section-dancer")
    dancer.style.position = "absolute"
    dancer.style.width = "200px"
    dancer.style.height = "200px"
    dancer.style.backgroundImage =
      'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23a55eea" opacity="0.05" d="M50 10c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-5 22l-4 28h18l-4-28h-10zm-5 32l-2 18h24l-2-18h-20z"/></svg>\')'
    dancer.style.backgroundSize = "contain"
    dancer.style.backgroundRepeat = "no-repeat"
    dancer.style.opacity = "0.1"
    dancer.style.zIndex = "0"
    dancer.style.pointerEvents = "none"

    dancer.style.top = Math.random() * 80 + "%"
    dancer.style.left = Math.random() * 80 + "%"

    section.style.position = "relative"
    section.style.overflow = "hidden"
    section.appendChild(dancer)

    gsap.to(dancer, {
      rotation: Math.random() * 20 - 10,
      y: Math.random() * 40 - 20,
      x: Math.random() * 40 - 20,
      duration: 5 + Math.random() * 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  })

  const heroSection = document.querySelector(".hero-section")
  heroSection.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01

    gsap.to(".dancer-shadow", {
      x: moveX * 2,
      y: moveY * 2,
      duration: 1,
    })
  })

  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const submitBtn = this.querySelector('button[type="submit"]')
      submitBtn.innerHTML = "Enviando..."
      submitBtn.disabled = true

      setTimeout(() => {
        
        gsap.to(contactForm, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          onComplete: () => {
     
            const successMsg = document.createElement("div")
            successMsg.classList.add("text-center", "py-4")
            successMsg.innerHTML = `
                            <div class="mb-4">
                                <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--accent-color);"></i>
                            </div>
                            <h4 style="color: var(--light-accent);">¡Mensaje Enviado!</h4>
                            <p>Gracias por contactarnos. Te responderemos pronto.</p>
                        `

            contactForm.parentNode.replaceChild(successMsg, contactForm)

            // Animate success message
            gsap.from(successMsg, {
              opacity: 0,
              y: 20,
              duration: 0.5,
            })
          },
        })
      }, 1500)
    })
  }

  const cursor = document.createElement("div")
  cursor.classList.add("custom-cursor")
  cursor.style.position = "fixed"
  cursor.style.width = "20px"
  cursor.style.height = "20px"
  cursor.style.borderRadius = "50%"
  cursor.style.border = "2px solid var(--accent-color)"
  cursor.style.pointerEvents = "none"
  cursor.style.zIndex = "9999"
  cursor.style.transform = "translate(-50%, -50%)"
  cursor.style.transition = "width 0.2s, height 0.2s, background-color 0.2s"
  document.body.appendChild(cursor)

  const cursorDot = document.createElement("div")
  cursorDot.classList.add("cursor-dot")
  cursorDot.style.position = "fixed"
  cursorDot.style.width = "5px"
  cursorDot.style.height = "5px"
  cursorDot.style.borderRadius = "50%"
  cursorDot.style.backgroundColor = "var(--accent-color)"
  cursorDot.style.pointerEvents = "none"
  cursorDot.style.zIndex = "10000"
  cursorDot.style.transform = "translate(-50%, -50%)"
  document.body.appendChild(cursorDot)

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
    })

    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    })
  })

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
    cursor.style.backgroundColor = "rgba(165, 94, 234, 0.2)"
  })

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)"
    cursor.style.backgroundColor = "transparent"
  })

  // Hover effect for links and buttons
  const interactiveElements = document.querySelectorAll("a, button, .gallery-item, .date-card, .team-member")
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "40px"
      cursor.style.height = "40px"
      cursor.style.backgroundColor = "rgba(165, 94, 234, 0.1)"
      cursorDot.style.width = "8px"
      cursorDot.style.height = "8px"
    })

    el.addEventListener("mouseleave", () => {
      cursor.style.width = "20px"
      cursor.style.height = "20px"
      cursor.style.backgroundColor = "transparent"
      cursorDot.style.width = "5px"
      cursorDot.style.height = "5px"
    })
  })


  document.body.style.cursor = "none"


  if ("ontouchstart" in window || navigator.maxTouchPoints) {
    cursor.style.display = "none"
    cursorDot.style.display = "none"
    document.body.style.cursor = "auto"
  }


  const createParticles = () => {
    const particlesContainer = document.createElement("div")
    particlesContainer.classList.add("particles-container")
    particlesContainer.style.position = "absolute"
    particlesContainer.style.top = "0"
    particlesContainer.style.left = "0"
    particlesContainer.style.width = "100%"
    particlesContainer.style.height = "100%"
    particlesContainer.style.overflow = "hidden"
    particlesContainer.style.zIndex = "1"
    particlesContainer.style.pointerEvents = "none"

    heroSection.appendChild(particlesContainer)

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div")
      particle.classList.add("particle")
      particle.style.position = "absolute"
      particle.style.width = Math.random() * 5 + 1 + "px"
      particle.style.height = particle.style.width
      particle.style.backgroundColor = "rgba(209, 196, 233, " + (Math.random() * 0.3 + 0.1) + ")"
      particle.style.borderRadius = "50%"

     
      particle.style.top = Math.random() * 100 + "%"
      particle.style.left = Math.random() * 100 + "%"

      particlesContainer.appendChild(particle)

      gsap.to(particle, {
        y: Math.random() * 200 - 100,
        x: Math.random() * 200 - 100,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }
  }

  createParticles()
})
