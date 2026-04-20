import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
         {
          type: "video",
          layout: "portrait",
          label:"Shoes I Painted",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/shoes.mp4",
        },
        {
          type: "video",
          layout: "landscape",
          label:"Touch Designer Porsche 944 Rendering",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/thefirstone%21.mp4",
        },
        {
          type: "video",
          layout: "landscape",
          label:"Iterations Of An SVG File I'm Working On",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/IMG_3883.mp4",
        },
      ]}
    />
  );
}
