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
  FileDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const BIRTH_YEAR = 2000;
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/momo.jpg"
          alt="Photo of Me"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Mostafa Deiab</h1>
          <p className="mt-4 font-light">
            {/* Update my age */}
            {new Date().getFullYear() - BIRTH_YEAR} -year-old computer engineer from Canada.
          </p>
          <p className="mt-2 font-light">
          I am a resourceful and innovative Computer Engineering student with a strong foundation 
          in both electrical and computer science disciplines.
          </p>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Featured Projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      {/* <section className="flex flex-col gap-8"> */}
        {/* <div className="flex justify-between">
          <h2 className="title text-3xl">Posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section> */}
    </article>
  );
}
