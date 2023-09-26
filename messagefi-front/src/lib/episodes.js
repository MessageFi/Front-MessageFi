export function getAllEpisodes() {
  return [
    {
      id: 1,
      title: "1: An Introduction to Solana",
      published: new Date('2023-09-26T10:00:00Z'),
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
      articleHeat: 5897,
      coinDonation: 312,
    },
    {
      id: 2,
      title: "2: Understanding Hacker Houses",
      published: new Date('2023-09-25T10:00:00Z'),
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
      articleHeat: 3456,
      coinDonation: 278,
    },
    {
      id: 3,
      title: "3: Dive into Hackathons",
      published: new Date('2023-09-24T10:00:00Z'),
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
      articleHeat: 2319,
      coinDonation: 188,
    },
    {
      id: 4,
      title: "4: Integrating AI into Blockchain Systems",
      published: new Date('2023-09-30T10:00:00Z'),
      description: "In this episode, we explore the revolutionary merge of AI and blockchain technologies, and its potential in various industries.",
      content: `
        <h2>Unlocking Potential with AI and Blockchain</h2>
        <p>Both AI and blockchain are groundbreaking technologies on their own. When combined, they have the potential to drive unparalleled innovation. By integrating AI into blockchain systems, we can optimize data handling, security measures, and system operations.</p>
        
        <h2>Use Cases</h2>
        <ul>
          <li><strong>Smart Contracts:</strong> AI can provide dynamic analysis to contracts, making them more adaptable to real-world situations.</li>
          <li><strong>Enhanced Security:</strong> Machine learning can detect and mitigate potential threats or breaches in a blockchain system.</li>
          <li><strong>Data Management:</strong> AI-driven analytics on the decentralized data stored in blockchains can offer invaluable insights.</li>
        </ul>
        
        <h2>Challenges and Prospects</h2>
        <p>While promising, the blend of AI and blockchain also brings forward challenges, primarily in terms of interoperability and data privacy. However, as advancements continue, the integration could pave the way for a new era of technology.</p>
      `,
      audio: {
        src: "https://example.com/episode7.mp3",
        type: "audio/mpeg",
      },
      articleHeat: 4123,
      coinDonation: 290,
    },
    {
      id: 5,
      title: "5: Decentralized AI: Powering the Future",
      published: new Date('2023-10-01T10:00:00Z'),
      description: "This episode delves into the world of decentralized AI platforms and their transformative potential.",
      content: `
        <h2>The Rise of Decentralized AI</h2>
        <p>Unlike traditional AI models that are hosted on centralized servers, decentralized AI operates on a distributed system, much like blockchain. This setup fosters enhanced data security, transparency, and accessibility.</p>
        
        <h2>Benefits of Decentralization in AI</h2>
        <ul>
          <li><strong>Robustness:</strong> Systems are less prone to single points of failure.</li>
          <li><strong>Data Privacy:</strong> Decentralized AI systems provide greater control over personal data.</li>
          <li><strong>Innovation:</strong> Open-source nature can lead to a rapid rate of innovation in AI.</li>
        </ul>
        
        <h2>Real-world Applications</h2>
        <p>From healthcare diagnostics to supply chain optimization, decentralized AI holds potential in revolutionizing numerous sectors. Its promise lies in combining the trustworthiness of blockchain with the power of artificial intelligence.</p>
      `,
      audio: {
        src: "https://example.com/episode8.mp3",
        type: "audio/mpeg",
      },
      articleHeat: 3590,
      coinDonation: 267,
    },
    {
      id: 6,
      title: "6: Blockchain's Role in AI Ethics",
      published: new Date('2023-10-02T10:00:00Z'),
      description: "This episode sheds light on how blockchain technology can be an ally in ensuring ethical AI practices.",
      content: `
        <h2>Ensuring Ethical AI</h2>
        <p>As AI systems increasingly influence our daily lives, ensuring their ethical operation becomes paramount. Blockchain, with its transparent and immutable nature, can be pivotal in this quest.</p>
        
        <h2>Transparency and Accountability</h2>
        <ul>
          <li><strong>Traceability:</strong> Blockchain records can trace the data and decisions made by AI, ensuring it operates fairly and without bias.</li>
          <li><strong>Verification:</strong> The decentralized ledger can be used to verify the authenticity of AI algorithms and their data sources.</li>
          <li><strong>Public Auditing:</strong> Open blockchains can allow third-party auditing of AI operations, ensuring public trust.</li>
        </ul>
        
        <h2>The Road Ahead</h2>
        <p>While challenges persist in blending AI and blockchain for ethics, the synergistic relationship between the two promises a future where AI operates more transparently and responsibly.</p>
      `,
      audio: {
        src: "https://example.com/episode9.mp3",
        type: "audio/mpeg",
      },
      articleHeat: 4028,
      coinDonation: 312,
    }
  ];
}
