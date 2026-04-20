import StoryRail from "./StoryRail";

export default function PhonesRail() {
  return (
    <StoryRail
      items={[
        { src: "/images/phones/IMG_3869.jpg" },
        {
          type: "video",
          layout: "portrait",
          label: "Collection of Unsold Phones",
          src: "https://hfog4ru2flp5mmzd.public.blob.vercel-storage.com/phone.mp4",
        },

        { src: "/images/phones/IMG_3870.jpg" },





      ]}
    />
  );
}
