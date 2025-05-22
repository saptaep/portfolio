import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; // Tambahkan ini

export default function Contact() {
  return (
    <section id="contact" className="py-36 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-300">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>
      <form className="flex flex-col space-y-4 mb-8">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded border h-32"
        />
        <button className="px-20 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition w-fit">
          Send
        </button>
      </form>

      <div className="flex justify-center space-x-6 text-2xl text-gray-600 dark:text-gray-300">
        <a
          href="https://instagram.com/saptaekaputra_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com/in/saptaep"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
          title="Linkedin"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=saptaekaputra0123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
          title="Email"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://github.com/saptaep"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 dark:hover:text-white"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
