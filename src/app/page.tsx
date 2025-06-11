import Experience from "@/src/components/Experience";
import LinkWithIcon from "@/src/components/LinkWithIcon";
import Posts from "@/src/components/Posts";
import Projects from "@/src/components/Projects";
import Socials from "@/src/components/Socials";
import { Button } from "@/src/components/ui/Button";
import { getPosts } from "@/src/lib/posts";
import {
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
  Code,
  Cpu,
  Shield,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const BIRTH_YEAR = 2000;
const LIMIT = 3; // Show 3 featured projects

const highlights = [
  {
    icon: <Code className="size-6" />,
    title: "Full-Stack Development",
    description: "13+ projects spanning web applications, embedded systems, and AI/ML solutions"
  },
  {
    icon: <Cpu className="size-6" />,
    title: "Hardware & FPGA",
    description: "CPU design, embedded systems, and hardware optimization achieving 48% power savings"
  },
  {
    icon: <Shield className="size-6" />,
    title: "DevOps & Security",
    description: "Infrastructure as Code, penetration testing, and OWASP compliance implementation"
  },
  {
    icon: <Zap className="size-6" />,
    title: "AI/ML Engineering",
    description: "Published research, 30% performance improvements, and real-time inference optimization"
  }
];

const stats = [
  { number: "13+", label: "Technical Projects" },
  { number: "96%", label: "ML Model Accuracy" },
  { number: "$3.5M", label: "Annual Cost Savings" },
  { number: "4+", label: "Years Experience" }
];

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg shadow-lg"
          src={`/momo.jpg`}
          alt="Photo of Mostafa Deiab"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Mostafa Deiab</h1>
          <p className="mt-4 font-light text-lg">
            {new Date().getFullYear() - BIRTH_YEAR}-year-old Computer Engineering Graduate from Canada
          </p>
          <p className="mt-2 font-light text-muted-foreground">
            Resourceful and innovative engineer with expertise in AI/ML, embedded systems, 
            and full-stack development. Currently pursuing Master's in Applied Science with 
            specialization in Artificial Intelligence.
          </p>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline" size="lg">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-primary">{stat.number}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Highlights Section */}
      <section className="grid gap-6 md:grid-cols-2">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex gap-4 rounded-lg border p-6">
            <div className="flex-shrink-0 text-primary">
              {highlight.icon}
            </div>
            <div>
              <h3 className="font-semibold">{highlight.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Featured Projects Section */}
      <section className="flex flex-col gap-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="title text-2xl sm:text-3xl">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">
              Showcase of technical excellence across multiple domains
            </p>
          </div>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view all projects"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      {/* Call to Action */}
      <section className="rounded-lg bg-muted/50 p-8 text-center">
        <h2 className="title text-2xl mb-4">Let's Build Something Amazing</h2>
        <p className="text-muted-foreground mb-6">
          Interested in collaborating on innovative projects or discussing opportunities?
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button>
              Get In Touch
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </article>
  );
}