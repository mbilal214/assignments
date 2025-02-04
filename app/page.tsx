import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-6 text-white">
      <div className="text-center py-8">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Muhammad Bilal</h1>
        <p className="text-xl mt-2 text-gray-200">GIAIC STUDENT</p>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src="/images/PROFILE.jpeg"width={200} height={150} className="border-4 border-white "alt="Profile Picture"
        />
      </div>
      <div className="bg-white/10 p-6 rounded-lg mb-6 border border-white/30">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-2 text-gray-200 ">
        I am currently pursuing a Bachelor's in Information Technology (BSIT) at BBSUL University. Passionate about technology, UI/UX design, and software development, I am constantly exploring innovative solutions to enhance user experiences and create impactful digital products..
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-lg mb-6 border border-white/30">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <ul className="mt-3 space-y-2">
          <li className="font-medium">🎨 UI/UX Design</li>
          <li className="font-medium">🖌️ Figma </li>
          <li className="ont-medium">💻 Front-End Development</li>
        </ul>
      </div>

      <div className="bg-white/10 p-6 rounded-lg  mb-6  border-white/30">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <p className="mt-2 font-medium">Milestone - GIAIC (2025)</p>
        <p className="text-gray-200 mt-1">I gained hands-on experience in front-end web development through the Governor’s Initiative in Artificial Intelligence, Web 3.0, and the Metaverse. This program enhanced my skills in modern web technologies, user-centric design, and emerging digital innovations.</p>
      </div>

      <div className="bg-white/10 p-6 rounded-lg mb-6 border border-white/30">
        <h2 className="text-3xl font-semibold">Education</h2>
        <p className="mt-2 font-medium">BSIT - Benazir Bhutto Shaheed University Lyari (2025)</p>
      </div>

      <div className="bg-white/10 p-6 rounded-lg text-center border border-white/30">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="mt-2 font-medium">📧 bilalbindani214@gmail.com</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link className="text-gray-300  font-medium "
            href="https://github.com/mbilal214/">GitHub</Link>
        </div>
      </div>
    </div>
  );
}
