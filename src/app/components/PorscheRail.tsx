import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        { src: "/images/IMG_8599.jpg" },

        {
          type: "video",
          layout: "portrait",
          label:"Porsche Tear Down And Paint",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/porscheteardown.mp4",
        },
        { src: "/images/IMG_8618.jpg" },
      ]}
    />
  );
}
