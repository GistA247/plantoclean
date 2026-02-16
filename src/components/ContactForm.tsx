import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

interface ContactFormProps {
  base?: string;
  labels?: Record<string, string>;
}

export default function ContactForm({ base = "", labels = {} }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const l = (key: string, fallback: string) => labels[key] || fallback;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    // Allow default form submission behavior
  };

  const inputClasses =
    "w-full border border-slate-200 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition text-base bg-white";

  const privacyHref = `${base}${labels["_privacyPath"] || "/datenschutz"}`;

  return (
    <form action="#" method="POST" onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2 block">
            {l("form.name.label", "Vollständiger Name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder={l("form.name.placeholder", "Max Mustermann")}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2 block">
            {l("form.email.label", "E-Mail Adresse")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder={l("form.email.placeholder", "max@beispiel.de")}
          />
        </div>
      </div>

      {/* Row 2: Phone + Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-2 block">
            {l("form.phone.label", "Telefonnummer (optional)")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder={l("form.phone.placeholder", "+49 123 456 789")}
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm font-medium text-slate-700 mb-2 block">
            {l("form.subject.label", "Betreff / Leistung")}
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
          >
            <option value="">{l("form.subject.placeholder", "Bitte auswählen...")}</option>
            <option value="gruenschnitt">{l("form.subject.gruenschnitt", "Grünschnitt")}</option>
            <option value="jahrespflege">{l("form.subject.jahrespflege", "Jahrespflege")}</option>
            <option value="rueckschnitt">{l("form.subject.rueckschnitt", "Rückschnitt")}</option>
            <option value="beischnitt">{l("form.subject.beischnitt", "Beischnitt")}</option>
            <option value="sonstiges">{l("form.subject.other", "Sonstiges")}</option>
          </select>
        </div>
      </div>

      {/* Row 3: Message */}
      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2 block">
          {l("form.message.label", "Ihre Nachricht")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-vertical`}
          placeholder={l("form.message.placeholder", "Beschreiben Sie kurz Ihr Projekt oder Ihre Wünsche...")}
        />
      </div>

      {/* Row 4: Privacy Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          checked={formData.privacy}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20 accent-[#2d5016] shrink-0"
        />
        <label htmlFor="privacy" className="text-sm text-slate-600 leading-relaxed">
          {l("form.privacy.text", "Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden. Weitere Informationen finden Sie in der")}{" "}
          <a
            href={privacyHref}
            className="text-primary underline hover:text-primary/80 transition-colors"
          >
            {l("form.privacy.link", "Datenschutzerklärung")}
          </a>
          .
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-base cursor-pointer"
        >
          <span className="material-icons text-[20px]">send</span>
          {l("form.submit", "Anfrage absenden")}
        </button>
      </div>
    </form>
  );
}
