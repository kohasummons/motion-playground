import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motion Playground",
  description: "Motion++",
};

const recipes = ["/basics", "/gestures", "/controls", "/views", "/scrolls", "/stagger", "/character"];

export default function Home() {
  return (
    <>
      <div className="grid place-content-center h-screen">
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe} className="text-gray-400 cursor-pointer">
              <Link href={recipe}>{recipe}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
