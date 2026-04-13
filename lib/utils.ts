export function formatDateLabel(value?: string) {
  if (!value) {
    return "Updated recently";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
