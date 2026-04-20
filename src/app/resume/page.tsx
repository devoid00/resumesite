export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <h1 className="text-3xl font-semibold">Resume</h1>

      <div className="mt-6 h-[80vh] w-full overflow-hidden rounded-2xl border">
        <iframe
          src="/Thomas_Herrick-Reynolds_Resume.pdf"
          className="h-full w-full"
          title="Resume PDF"
        />
      </div>
    </main>
  );
}
