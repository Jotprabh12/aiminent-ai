"use client";

import { useActionState } from "react";
import { Input, Select, Switch } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitContact, type ContactFormState } from "@/lib/actions/contact";

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

const initialState: ContactFormState = {};

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form className="space-y-4" action={formAction}>
      {state.message && (
        <p className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
          {state.message}
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="First Name"
          name="firstName"
          required
          error={state.errors?.firstName?.[0]}
        />
        <Input
          label="Last Name"
          name="lastName"
          required
          error={state.errors?.lastName?.[0]}
        />
      </div>
      <Input
        label="Company"
        name="company"
        required
        error={state.errors?.company?.[0]}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Email"
          name="email"
          type="email"
          required
          error={state.errors?.email?.[0]}
        />
        <Input label="Phone" name="phone" type="tel" />
      </div>
      <Select label="Industry" name="industry" required options={INDUSTRIES} />
      <Select label="Team Size" name="teamSize" options={TEAM_SIZES} />
      <Input
        label="Biggest Challenge"
        name="challenge"
        required
        helperText="Tell us what you would like to automate."
        error={state.errors?.challenge?.[0]}
      />
      <Switch label="I would like a callback instead of email" />
      <Button type="submit" fullWidth size="lg">
        Book Free Consultation
      </Button>
    </form>
  );
}
