export default function Contact() {
  return (
    <section id="contact" className="mb-24 -scroll-mt-24 md:mb-0">
      <div className="max-w-screen flex flex-col items-center justify-center text-center md:px-12 md:py-28 lg:min-h-screen">
        <h2 className="text-xl font-semibold uppercase">Get in Touch</h2>
        <p className="mt-5">
          I'm currently on the lookout for a chance to learn and grow through an
          internship or job. <br /> I’d love to hear from you!
        </p>
        <button className="mt-9 rounded-sm bg-secondary p-3 text-center text-lg font-semibold text-white">
          <a
            href="mailto: inhog.cedrick@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Let's Connect
          </a>
        </button>
      </div>
    </section>
  );
}
