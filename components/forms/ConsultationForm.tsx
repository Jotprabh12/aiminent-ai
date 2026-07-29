"use client";

import { useActionState } from "react";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  submitConsultation,
  type ConsultationFormState,
} from "@/lib/actions/consultation";

const INDUSTRIES = [
  { label: "Real Estate", value: "realestate" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Finance", value: "finance" },
  { label: "Education", value: "education" },
  { label: "Legal", value: "legal" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Other", value: "other" },
];

const TEAM_SIZES = [
  { label: "1–10", value: "1-10" },
  { label: "11–50", value: "11-50" },
  { label: "51–200", value: "51-200" },
  { label: "201–500", value: "201-500" },
  { label: "500+", value: "500+" },
];

const initialState: ConsultationFormState = {};

export function ConsultationForm() {
  const [state, formAction] = useActionState(submitConsultation, initialState);

  return (
    <form className="space-y-4" action={formAction}>
      {state.message && (
        <p className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
          {state.message}
        </p>
      )}
      <Input
        label="Full Name"
        name="fullName"
        required
        error={state.errors?.fullName?.[0]}
      />
      <Input
        label="Company"
        name="companyName"
        required
        error={state.errors?.companyName?.[0]}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        required
        error={state.errors?.email?.[0]}
      />
      <Input
        label="Phone"
        name="phone"
        type="tel"
        required
        error={state.errors?.phone?.[0]}
        helperText="For callback booking"
      />
      <Select
        label="Industry"
        name="industry"
        required
        options={INDUSTRIES}
        error={state.errors?.industry?.[0]}
      />
      <Select
        label="Team Size"
        name="teamSize"
        required
        options={TEAM_SIZES}
        error={state.errors?.teamSize?.[0]}
      />
      <Input
        label="Biggest Challenge"
        name="challenge"
        required
        helperText="Tell us what you would like to automate."
        error={state.errors?.challenge?.[0]}
      />
      <Button type="submit" fullWidth size="lg">
        Confirm Booking
      </Button>
    </form>
  );
}
