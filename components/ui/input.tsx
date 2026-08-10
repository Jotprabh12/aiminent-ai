"use client";

import { forwardRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, helperText, error, className, id, ...props },
  ref,
) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          "w-full rounded-lg border border-border bg-surface-muted px-3 py-2 text-body-sm text-foreground transition-colors outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-error focus-visible:border-error",
          className,
        )}
        aria-invalid={!!error || undefined}
        aria-describedby={
          error || helperText ? `${inputId}-message` : undefined
        }
        {...props}
      />
      {(helperText || error) && (
        <p
          id={`${inputId}-message`}
          className={cn("text-xs", error ? "text-error" : "text-text-muted")}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
});

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { label, helperText, error, className, id, ...props },
    ref,
  ) {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full rounded-lg border border-border bg-surface-muted px-3 py-2 text-body-sm text-foreground transition-colors outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error focus-visible:border-error",
            className,
          )}
          aria-invalid={!!error || undefined}
          aria-describedby={
            error || helperText ? `${textareaId}-message` : undefined
          }
          {...props}
        />
        {(helperText || error) && (
          <p
            id={`${textareaId}-message`}
            className={cn("text-xs", error ? "text-error" : "text-text-muted")}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  },
);

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, helperText, error, options, className, id, ...props },
    ref,
  ) {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full rounded-lg border border-border bg-surface-muted px-3 py-2 text-body-sm text-foreground transition-colors outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error focus-visible:border-error",
            className,
          )}
          aria-invalid={!!error || undefined}
          aria-describedby={
            error || helperText ? `${selectId}-message` : undefined
          }
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {(helperText || error) && (
          <p
            id={`${selectId}-message`}
            className={cn("text-xs", error ? "text-error" : "text-text-muted")}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  },
);

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Checkbox({
  label,
  error,
  className,
  id,
  ...props
}: CheckboxProps) {
  const checkboxId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={checkboxId} className="flex items-center gap-2">
        <input
          type="checkbox"
          id={checkboxId}
          className={cn(
            "h-4 w-4 rounded border border-divider bg-surface text-primary accent-primary focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error accent-error",
            className,
          )}
          {...props}
        />
        {label && <span className="text-sm text-foreground">{label}</span>}
      </label>
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name: string;
  value: string;
}

export function Radio({
  label,
  error,
  name,
  value,
  className,
  id,
  ...props
}: RadioProps) {
  const radioId = id ?? `${name}-${value}`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={radioId} className="flex items-center gap-2">
        <input
          type="radio"
          id={radioId}
          name={name}
          value={value}
          className={cn(
            "h-4 w-4 border border-divider bg-surface text-primary accent-primary focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error accent-error",
            className,
          )}
          {...props}
        />
        {label && <span className="text-sm text-foreground">{label}</span>}
      </label>
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Switch({
  label,
  helperText,
  error,
  className,
  id,
  ...props
}: SwitchProps) {
  const switchId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  const [checked, setChecked] = useState(
    props.checked ?? props.defaultChecked ?? false,
  );

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={switchId} className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          id={switchId}
          className={cn(
            "relative h-5 w-9 shrink-0 rounded-full border-2 border-divider transition-colors focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:outline-none",
            checked ? "border-primary bg-primary" : "bg-surface",
            error && "border-error",
            className,
          )}
          onClick={() => setChecked(!checked)}
        >
          <span
            className={cn(
              "block h-4 w-4 translate-y-0.5 rounded-full bg-foreground shadow transition-transform",
              checked && "translate-x-4",
            )}
          />
        </button>
        {label && <span className="text-sm text-foreground">{label}</span>}
      </label>
      {(helperText || error) && (
        <p className={cn("text-xs", error ? "text-error" : "text-text-muted")}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}
