"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div>
      <div>an error has occurred!</div>
      <div>error: {error.message}</div>
    </div>
  );
}
