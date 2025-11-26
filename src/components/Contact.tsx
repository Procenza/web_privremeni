import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gdprConsent: false,
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gdprConsent) {
      toast({
        title: "Privola potrebna",
        description: "Molimo potvrdite da ste pročitali i prihvatili našu Politiku Privatnosti.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Poruka poslana!",
      description: "Odgovorit ćemo vam što je prije moguće.",
    });
    setFormData({ name: "", email: "", message: "", gdprConsent: false });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-500">
              05/CONTACT
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6">
            Kontaktirajte Nas<span className="text-sky-500">.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
            Spremni transformirati svoj posao? Započnimo razgovor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* TECHNICAL SPEC FORM - No backgrounds, only bottom borders */}
          <div className="border-2 border-slate-900 dark:border-white rounded-none p-8 sm:p-10 bg-slate-50 dark:bg-slate-900">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name Field - Technical Spec Style */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3"
                >
                  [01] IME I PREZIME
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Vaše ime i prezime"
                  className="w-full bg-transparent rounded-none border-b border-slate-300 dark:border-slate-700 focus:border-b-2 focus:border-sky-500 focus:outline-none transition-all duration-200 px-0 py-3 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3"
                >
                  [02] E-MAIL ADRESA
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="vasa@adresa.com"
                  className="w-full bg-transparent rounded-none border-b border-slate-300 dark:border-slate-700 focus:border-b-2 focus:border-sky-500 focus:outline-none transition-all duration-200 px-0 py-3 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3"
                >
                  [03] PORUKA
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Opišite ukratko vaš projekt ili izazov..."
                  rows={4}
                  className="w-full bg-transparent rounded-none border-b border-slate-300 dark:border-slate-700 focus:border-b-2 focus:border-sky-500 focus:outline-none transition-all duration-200 px-0 py-3 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                />
              </div>

              {/* GDPR Consent */}
              <div className="flex items-start space-x-3 pt-4">
                <Checkbox
                  id="gdprConsent"
                  checked={formData.gdprConsent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, gdprConsent: checked as boolean })
                  }
                  className="mt-1 rounded-none border-slate-300 dark:border-slate-700 data-[state=checked]:bg-sky-500 data-[state=checked]:border-sky-500 data-[state=checked]:text-sky-500"
                />
                <label htmlFor="gdprConsent" className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed cursor-pointer">
                  Pročitao/la sam i prihvaćam{" "}
                  <a href="/privacy-policy" className="text-sky-500 underline hover:no-underline font-mono" target="_blank" rel="noopener noreferrer">
                    Politiku Privatnosti
                  </a>
                </label>
              </div>

              {/* Submit Button - Mechanical */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-sky-500 hover:bg-sky-500 text-white font-bold text-base rounded-none border border-slate-900 dark:border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 focus:ring-2 focus:ring-sky-500 font-mono uppercase tracking-widest"
              >
                POŠALJI UPIT
              </Button>

              {/* Technical Footer */}
              <div className="pt-4 border-t-2 border-slate-200 dark:border-slate-800">
                <p className="font-mono text-xs text-slate-400 dark:text-slate-600 tracking-wider">
                  FORM_ID: CONTACT_001 | STATUS: ACTIVE
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info Cards - Neo-Brutalist */}
          <div className="space-y-0">
            <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white rounded-none p-8 flex items-start gap-6">
              <div className="w-14 h-14 bg-sky-500 border-2 border-slate-900 dark:border-white rounded-none flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-white">@</span>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:contact@procenza.com"
                  className="text-lg font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
                >
                  contact@procenza.com
                </a>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white border-t-0 rounded-none p-8 flex items-start gap-6">
              <div className="w-14 h-14 bg-sky-500 border-2 border-slate-900 dark:border-white rounded-none flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold font-mono text-white">M</span>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-2">
                  Telefon
                </h3>
                <a
                  href="https://wa.me/38512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
                >
                  +385 (1) 234-5678
                </a>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-white border-t-0 rounded-none p-8 flex items-start gap-6">
              <div className="w-14 h-14 bg-sky-500 border-2 border-slate-900 dark:border-white rounded-none flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold font-mono text-white">A</span>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-2">
                  Ured
                </h3>
                <a
                  href="https://maps.google.com/?q=Ilica+123,+Zagreb,+Croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors block"
                >
                  Ilica 123, Kat 5<br />
                  Zagreb, Hrvatska 10000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
