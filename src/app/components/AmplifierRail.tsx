import StoryRail from "./StoryRail";

export default function FirstCarRail() {
  return (
    <StoryRail
      items={[
        {
          type: "video",
          layout: "portrait",
          label:"QSC Power Cycling Repair",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/amps1.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          label:"SAE P500 Power Amp Repair",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/amps2.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          label:"Tame Impala And Various Other Amps I've Worked On",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/amps3.mp4",
        },
        {
          type: "video",
          layout: "portrait",
          label:"Yamaha Receiver",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/amps4.mp4",
        },
        { src: "/images/IMG_2315.jpg" },
      ]}
    />
  );
}
