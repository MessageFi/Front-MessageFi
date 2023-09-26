export function getAllEpisodes() {
  return [
    {
      id: 1,
      title: "1: An Introduction to Solana",
      published: new Date('2023-01-15T10:00:00Z'),
      description: "In this episode, we dive deep into Solana, a high-performance blockchain platform.",
      content: `
        <h2>What is Solana?</h2>
        <p>Solana is a high-performance blockchain platform designed to deliver fast, secure, and decentralized applications and cryptocurrencies. A key distinction is its high throughput and low latency, making it exceptionally suitable for scalable decentralized applications.</p>
    
        <h2>Features of Solana</h2>
        <ul>
          <li><strong>High Performance:</strong> Solana employs a unique consensus mechanism called Proof of History (PoH), allowing it to process hundreds of thousands of transactions per second.</li>
          <li><strong>Security:</strong> While Solana prioritizes speed and efficiency, it does not compromise on security. It uses state-of-the-art cryptographic techniques to ensure the security of the network.</li>
          <li><strong>Decentralization:</strong> Solana's architecture ensures there's no single point of failure, and its PoH mechanism reduces the potential for centralization.</li>
        </ul>
    
        <h2>The Solana Ecosystem</h2>
        <p>Solana is not just a blockchain platform; it boasts a growing ecosystem comprising various decentralized applications, projects, and tools. From DeFi to NFTs, Solana has rapidly become the platform of choice for many developers and entrepreneurs.</p>
    
        <h2>Conclusion</h2>
        <p>With its unique technical features and robust ecosystem, Solana is quickly rising as a mainstream blockchain platform. Its high performance and security make it ideally suited for the future of blockchain applications.</p>
      `,
      audio: {
        src: "https://example.com/episode1.mp3",
        type: "audio/mpeg",
      },
    },
    {
      id: 2,
      title: "2: Understanding Hacker Houses",
      published: new Date('2023-04-01T10:00:00Z'),
      description: "In this episode, we delve into the concept of Hacker Houses and their significance in the tech community.",
      content: `
        <h2>What is a Hacker House?</h2>
        <p>A Hacker House, also known as a hack house or hacker home, is a shared living space where technologists, entrepreneurs, designers, and other creative professionals live and collaborate together. These spaces foster a sense of community, collaboration, and continuous learning, where residents often work on tech projects, startups, or other innovative ideas.</p>
    
        <h2>Features of Hacker Houses</h2>
        <ul>
          <li><strong>Collaborative Environment:</strong> Residents come together to share ideas, work on projects, and even build startups together.</li>
          <li><strong>Networking:</strong> Living in a hacker house provides ample opportunities for networking with like-minded professionals, mentors, and potential partners.</li>
          <li><strong>Affordable:</strong> Hacker houses often offer relatively affordable accommodation, especially in high-cost areas, making them attractive for budding entrepreneurs or recent graduates.</li>
        </ul>
    
        <h2>The Rise of Hacker Houses</h2>
        <p>With the tech boom and the increasing value of collaboration in the tech industry, hacker houses have grown in popularity, especially in tech hubs like Silicon Valley, San Francisco, and other cities worldwide. They represent a shift towards community-based living and working, driven by the digital age.</p>
      `,
      audio: {
        src: "https://example.com/episode4.mp3",
        type: "audio/mpeg",
      },
    },
    {
      id: 3,
      title: "3: Dive into Hackathons",
      published: new Date('2023-05-01T10:00:00Z'),
      description: "This episode offers insights into the exciting world of hackathons and their role in fostering innovation.",
      content: `
        <h2>What is a Hackathon?</h2>
        <p>A hackathon, a portmanteau of "hack" and "marathon", is an event, typically lasting several days, where individuals or teams collaborate intensively on software projects or hardware hacks. The goal is often to create a functional prototype by the end of the event.</p>
    
        <h2>Key Elements of Hackathons</h2>
        <ul>
          <li><strong>Collaboration:</strong> Participants work in teams to brainstorm, design, and develop projects in a limited timeframe.</li>
          <li><strong>Innovation:</strong> Hackathons provide a platform for innovative ideas to come to life and be tested in real-time.</li>
          <li><strong>Learning:</strong> With a mix of skills and backgrounds, participants often learn from each other, from mentors, and through hands-on experience.</li>
        </ul>
    
        <h2>Impact of Hackathons</h2>
        <p>Hackathons have become a staple in the tech world, hosted by educational institutions, tech companies, and other organizations. They serve multiple purposes: recruiting talent, promoting a brand, fostering innovation, and building community. Many successful startups and popular software products have roots in hackathon projects, showcasing their potential in driving tech advancements.</p>
      `,
      audio: {
        src: "https://example.com/episode5.mp3",
        type: "audio/mpeg",
      },
    }
  ];
}
