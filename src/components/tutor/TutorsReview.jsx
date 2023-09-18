export default function TutorsReview() {
  const data = [
    {
      name: "Bonnie Green",
      pos: "Developer at OpenAI",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      desc: "Integrating with ease",
      desc2:
        "If you value your time, I would definitely recommend this solution.",
    },
    {
      name: "Roberta Casas",
      pos: "Lead Designer at Dropbox",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      desc: "A Strong Foundation for Every Project",
      desc2:
        "Designing with Figma components that seamlessly translate to the utility classes of Tailwind CSS is a huge time-saver!",
    },
    {
      name: "Jese Leos",
      pos: "Software Engineer at Facebook",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      desc: "Revolutionary Workflow",
      desc2:
        "Aesthetically, the well-designed components are beautiful and will undoubtedly elevate your next application.",
    },
    {
      name: "Joseph McFall",
      pos: "CTO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      desc: "Efficient Collaboration",
      desc2:
        "You have numerous examples that can be used to create rapid prototypes for your team.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {data.map((item, index) => (
        <figure
          key={index}
          className="flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-100 border border-gray-200 rounded-t-lg md:rounded-tl-lg dark:border-gray-700"
        >
          <blockquote className="max-w-md mx-auto mb-4 text-gray-500 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.desc}
            </h3>
            <p className="my-4">{item.desc2}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src={item.image}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>{item.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item.pos}
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
