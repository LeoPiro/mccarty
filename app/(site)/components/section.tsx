import { ReactNode } from "react";

export function Section({ id, title, children, subtitle, className = "" }: { id?: string; title?: string; subtitle?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>
      <div>
        {title && <h2 className="text-3xl md:text-4xl font-semibold text-balance text-mccarty-dark">{title}</h2>}
        {subtitle && <p className="mt-4 text-mccarty-medium max-w-2xl">{subtitle}</p>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
