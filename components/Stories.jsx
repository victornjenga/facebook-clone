import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Orange",
    src: "/images/users/orange.jpg",
    profile: "/images/avatars/apple.jpg",
  },
  {
    name: " Ovacado",
    src: "/images/users/ovacado.jpg",
    profile: "/images/avatars/pieapple.jpg",
  },
  {
    name: "Tomato",
    src: "/images/users/tomato.jpg",
    profile: "/images/avatars/banana.jpg",
  },
  {
    name: " Ovacado",
    src: "/images/users/ovacado.jpg",
    profile: "/images/avatars/pieapple.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
