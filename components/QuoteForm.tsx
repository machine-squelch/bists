"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[\d\s\-\(\)]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  isNewCustomer: z.boolean().default(false),
})

type QuoteFormValues = z.infer<typeof quoteFormSchema>

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      isNewCustomer: false,
    },
  })

  const onSubmit = async (data: QuoteFormValues) => {
    // Handle form submission
    console.log("Form data:", data)
    // In a real app, you would send this to your API
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" aria-label="Quote request form">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Full Name <span className="text-red-500" aria-label="required">*</span>
        </label>
        <Input
          id="fullName"
          {...register("fullName")}
          placeholder="John Doe"
          className={errors.fullName ? "border-red-500" : ""}
          aria-required="true"
          aria-invalid={errors.fullName ? "true" : "false"}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Phone <span className="text-red-500" aria-label="required">*</span>
        </label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="(555) 123-4567"
          className={errors.phone ? "border-red-500" : ""}
          aria-required="true"
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email <span className="text-red-500" aria-label="required">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          className={errors.email ? "border-red-500" : ""}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="serviceNeeded"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Service Needed <span className="text-red-500" aria-label="required">*</span>
        </label>
        <Select
          id="serviceNeeded"
          {...register("serviceNeeded")}
          className={errors.serviceNeeded ? "border-red-500" : ""}
          aria-required="true"
          aria-invalid={errors.serviceNeeded ? "true" : "false"}
          aria-describedby={errors.serviceNeeded ? "serviceNeeded-error" : undefined}
        >
          <option value="">Select a service...</option>
          <option value="weekly-cleaning">Weekly Cleaning</option>
          <option value="equipment-repair">Equipment Repair</option>
          <option value="pool-opening-closing">Pool Opening/Closing</option>
          <option value="green-to-clean">Green-to-Clean</option>
          <option value="new-installation">New Installation</option>
          <option value="other">Other</option>
        </Select>
        {errors.serviceNeeded && (
          <p id="serviceNeeded-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.serviceNeeded.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="isNewCustomer"
          {...register("isNewCustomer", {
            setValueAs: (value) => value === "on" || value === true,
          })}
        />
        <label
          htmlFor="isNewCustomer"
          className="text-sm font-medium text-foreground cursor-pointer"
        >
          Are you a new customer?
        </label>
      </div>

      <Button
        type="submit"
        variant="secondary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Get My Free Quote"}
      </Button>

      <p className="text-xs text-gray-600 text-center">
        We&apos;ll get back to you within 24 hours. Need service faster? Use
        our booking calendar.
      </p>
    </form>
  )
}
