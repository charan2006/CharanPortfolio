import { useEffect, useRef } from "react";
import { profile } from "../data/portfolioData";
import profilePic from "../assets/profile1.jpeg";

export default function Hero() {
  const auroraRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 60;
      const y = (e.clientY / innerHeight - 0.5) * 60;

      if (auroraRef.current) {
        auroraRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="aurora">
        <div className="aurora-blob b1" ref={auroraRef}></div>
        <div className="aurora-blob b2"></div>
        <div className="aurora-blob b3"></div>
      </div>

      <div className="hero-content">
        {/* Left Side */}
        <div className="hero-left">
          <span className="eyebrow">
            {profile.role} • {profile.location}
          </span>

          <h1 className="hero-name">
            Hi, I'm{" "}
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero-tagline">{profile.tagline}</p>

          {/* Optional Terminal Effect */}
          {/* 
          <div className="hero-terminal">
            <span>$ status --current</span>
            <span className="cursor-blink" />
          </div>
          */}

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View My Work
            </a>

            <a
              className="btn btn-ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="profile-image-wrapper">
            <img
              src={profilePic}
              alt={profile.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}