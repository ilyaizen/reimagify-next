"use client";

import { SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const { isSignedIn } = useSession();

  const createThumbnail = useMutation(api.thumbnails.createThumbnail);

  const thumbnails = useQuery(api.thumbnails.getThumbnailsForUser);

  return (
    <main className="">
      {isSignedIn ? <SignOutButton /> : <SignInButton />}

      {isSignedIn && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            const title = formData.get("title") as string;
            if (title && title.trim() !== "") {
              await createThumbnail({ title });
              form.reset();
            } else {
              // Handle empty title case (e.g., show an error message)
              console.error("Title cannot be empty");
            }
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="text-black"
            placeholder="Enter title"
            required
          />
          <button type="submit">Create Thumbnail</button>
        </form>
      )}

      {thumbnails?.map((thumbnail) => {
        return <div key={thumbnail._id}>{thumbnail.title}</div>;
      })}
    </main>
  );
}
