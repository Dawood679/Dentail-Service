"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

const inputClasses =
  "w-full rounded-xl bg-cloud-100 px-4 py-3 text-sm text-ink-900 shadow-card-sm placeholder:text-ink-500/70 focus:outline-none focus:ring-2 focus:ring-brand-400";

interface ContactFormProps {
  submitLabel?: string;
}

export function ContactForm({ submitLabel = "Send Message" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card hover={false}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <h3 className="font-display text-xl font-semibold text-ink-900">
              Message sent!
            </h3>
            <p className="max-w-sm text-sm text-ink-500">
              Thanks for reaching out. This is a demo form, so no message was
              actually sent &mdash; but in a live site our team would reply
              within one business day.
            </p>
            <Button variant="secondary" onClick={() => setSubmitted(false)}>
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <input
                required
                type="text"
                placeholder="Your Name"
                className={inputClasses}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={inputClasses}
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className={inputClasses}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <select required defaultValue="" className={inputClasses}>
                <option value="" disabled>
                  Select Service
                </option>
                {services.map((service) => (
                  <option key={service.slug}>{service.title}</option>
                ))}
                <option>Other</option>
              </select>
              <input
                required
                type="date"
                aria-label="Select Date"
                className={inputClasses}
              />
            </div>
            <textarea
              rows={4}
              placeholder="Message (optional)"
              className={inputClasses}
            />
            <Button type="submit" className="w-full">
              {submitLabel}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </Card>
  );
}
