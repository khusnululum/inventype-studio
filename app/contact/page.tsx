"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-28 min-h-screen">
      <section className="px-8 md:px-16 pb-16 border-b border-black/10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-[0.25em] uppercase text-muted mb-6"
        >
          Inventype Studio / Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(52px,8vw,110px)] font-light leading-none tracking-tight"
        >
          Let's
          <br />
          <em className="italic text-muted">talk type</em>
        </motion.h1>
      </section>

      <section className="px-8 md:px-16 py-24 grid md:grid-cols-2 gap-20 border-b border-black/10">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-10"
        >
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
              General Enquiries
            </p>
            <p className="font-display text-[22px] font-light">
              hello@inventype.studio
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
              Licensing
            </p>
            <p className="font-display text-[22px] font-light">
              license@inventype.studio
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
              Studio
            </p>
            <p className="text-[13px] text-muted leading-relaxed">
              Inventype Studio
              <br />
              Prinsengracht 112
              <br />
              1015 EA Amsterdam
              <br />
              Netherlands
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
              Follow
            </p>
            <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-muted">
              {["Instagram", "Twitter", "Are.na"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="hover:text-ink transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {sent ? (
            <div className="h-full flex items-center">
              <div>
                <p className="font-display text-[48px] font-light leading-tight mb-4">
                  Thank you.
                </p>
                <p className="text-[13px] text-muted">
                  We'll be in touch within 2 business days.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {[
                { label: "Your name", type: "text", placeholder: "Full name" },
                { label: "Email address", type: "email", placeholder: "you@domain.com" },
                { label: "Subject", type: "text", placeholder: "Licensing / Custom work / General" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-muted">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-transparent border-b border-black/20 pb-3 text-[13px] text-ink placeholder:text-muted/40 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-b border-black/20 pb-3 text-[13px] text-ink placeholder:text-muted/40 focus:outline-none focus:border-ink transition-colors resize-none"
                />
              </div>
              <button
                onClick={() => setSent(true)}
                className="self-start mt-4 bg-ink text-paper text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:opacity-70 transition-opacity"
              >
                Send message →
              </button>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
