# `app/book-consultation/`

Consultation booking flow — Calendly inline embed (`CalendlyInline`, isolated
client component + lazy widget script) as the V1 booking path on top of the
`BookingProvider` seam (`lib/integrations/booking.ts`), with the built-in
`ConsultationForm` (server action + Zod) retained as a fallback. Built in M6.
