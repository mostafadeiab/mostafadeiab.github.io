import ContactForm from "@/src/components/ContactForm";

export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">
        Contact Me.
      </h1>
      <ContactForm />
    </article>
  );
}
