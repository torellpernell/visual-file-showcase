import { Crown, Briefcase, Code, Target, Heart } from "lucide-react";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ContentBlock } from "@/components/portfolio/ContentBlock";

// Leadership Images
import leadership1 from "@/assets/leadership-1.jpg";
import leadership2 from "@/assets/leadership-2.jpg";
import leadership3 from "@/assets/leadership-3.jpg";

// Business Images
import business1 from "@/assets/business-1.jpg";
import business2 from "@/assets/business-2.jpg";
import business3 from "@/assets/business-3.jpg";

// Technology Images
import technology1 from "@/assets/technology-1.jpg";
import technology2 from "@/assets/technology-2.jpg";
import technology3 from "@/assets/technology-3.jpg";

// Career Images
import career1 from "@/assets/career-1.jpg";
import career2 from "@/assets/career-2.jpg";
import career3 from "@/assets/career-3.jpg";

// Wellness Images
import wellness1 from "@/assets/wellness-1.jpg";
import wellness2 from "@/assets/wellness-2.jpg";
import wellness3 from "@/assets/wellness-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHero />
      <PortfolioNav />

      {/* Leadership Section */}
      <PortfolioSection
        id="leadership"
        title="Leadership"
        icon={<Crown className="w-6 h-6" />}
        gradient="bg-gradient-primary"
        images={[leadership1, leadership2, leadership3]}
      >
        <ContentBlock title="Team Week Experience">
          <p>My team week experience was groundbreaking for me. It provided better insight into what the program would encompass and motivation for completing the program.</p>
        </ContentBlock>

        <ContentBlock title="Gifts Project">
          <p>I really enjoyed my gifts project. I was able to discover and be more insightful about how my teammates are unique individuals and learn more about how to relate to people from their point of views.</p>
        </ContentBlock>

        <ContentBlock title="Community Role & Leadership in Service">
          <p>As the hope specialist, I consistently and continuously remitted words of hope and encouragement to the entire team within our group chat. I encouraged two of my cohort members from my team not to drop out of the program and to remember their "why".</p>
        </ContentBlock>

        <ContentBlock title="Planetary Responsibility Workshop">
          <p>I believe the highlight from my Planetary Responsibility is to simply remember what kind of legacy that I would like to leave behind. Which is to inspire my fellow man going along the journey beside me and to be an example for the next generation that are coming behind.</p>
        </ContentBlock>

        <ContentBlock title="Tea Host & Guest Experience">
          <p>My experience serving as Tea Host as well once as Tea Guest was wonderful. I got to learn about my Tea Guest, Kat, and how her transition into the tech field was challenging but well worth the effort. My experience as a Tea Guest was not very fulfilling as I did not feel like I had a great story to share, other than my journey up until this point. I believe my life is like a book, and there are still more chapters to be written.</p>
        </ContentBlock>

        <ContentBlock title="Key Lessons from Tea Debriefs">
          <p>Key lessons from Tea debriefs included things such as focusing on the positive and the negative, being persistent and determined in what one wants to accomplish in life, and how to navigate the pitfalls and obstacles of life when they arise.</p>
        </ContentBlock>

        <ContentBlock title="Dream Speech Recognition">
          <p className="font-medium text-secondary">I was recognized for being a Business Leader.</p>
          <p>I worked to make business applications more user-friendly, efficient, secure and reliable.</p>
        </ContentBlock>
      </PortfolioSection>

      {/* Business Section */}
      <PortfolioSection
        id="business"
        title="Business"
        icon={<Briefcase className="w-6 h-6" />}
        gradient="bg-gradient-secondary"
        images={[business1, business2, business3]}
      >
        <ContentBlock title="Client Project Overview">
          <p><strong>Business Problem:</strong> Develop a web-based application that will allow the client to aggregate data from multiple sources in order to analyze the data so they can make better business decisions that promote customer satisfaction.</p>
        </ContentBlock>

        <ContentBlock title="Team Approach">
          <p>We approached the solution by first getting an understanding and knowledge of what technical resources we could use to develop the application. We conducted team meetings on a daily basis to brainstorm ideas, create a project development outline, monitor and track progress and any obstacles along the way.</p>
        </ContentBlock>

        <ContentBlock title="Individual Role & Contribution">
          <p>Throughout the program, I performed as a software developer, project manager, data analyst, and lastly quality analyst.</p>
        </ContentBlock>

        <ContentBlock title="Consulting Company Reflections">
          <p>I didn't get to form my team. i.c.stars formed my team for me. However, working with the team was wonderful. I learned that working with others on a project is typically much better than working alone because it allows one to learn from others and benefits from other individuals' perspectives that makes the end project much better than it would have been if one person was working on it alone.</p>
        </ContentBlock>

        <ContentBlock title="Proposal Presentation Takeaways">
          <p>I think being new to project management, my team's project manager may not have fully understood how much responsibility the position entails. There were some challenges within the team since none of us knew much about technology, but we were able to learn fast, adapt quickly, collaborate effectively, and ultimately be successful with our presentation. It was truly an amazing result of teamwork and everyone working together.</p>
        </ContentBlock>

        <ContentBlock title="Company Engagement Days">
          <p>I observed that there is not a lot of racial/ethnic diversity within corporate America when it comes to job positions that require technical skills and knowledge.</p>
        </ContentBlock>

        <ContentBlock title="Mentorship Experience">
          <p>My mentors were both nice people who seemed like it was their first time mentoring. Due to below average mentorship, my team relied heavily on i.c.stars tech staff and alumni to guide us in the right direction.</p>
        </ContentBlock>

        <ContentBlock title="Business Professionalism & Communication">
          <p>I learned that business professionalism is about meeting deadlines, doing things that you may sometimes not want to do, and fulfilling your commitments. I learned that communication is about transparency, respect, being prompt, and being proactive.</p>
        </ContentBlock>
      </PortfolioSection>

      {/* Technology Section */}
      <PortfolioSection
        id="technology"
        title="Technology"
        icon={<Code className="w-6 h-6" />}
        gradient="bg-gradient-accent"
        images={[technology1, technology2, technology3]}
      >
        <ContentBlock title="Web Application Overview">
          <p><strong>Problem Solved:</strong> It provided customer feedback data which provides insights the business can use to make strategic business decisions.</p>
          <p><strong>My Contribution:</strong> I created the Power BI dashboard visualizations, which consisted of both front-end and back-end development.</p>
        </ContentBlock>

        <ContentBlock title="Geek Week Experience">
          <p>During Geek Week, I was pushed to challenge myself to learn new skills, such as SQL syntax and CRUD statements. I also engaged in Excel challenges, which required me to improve my skills in Excel quickly so that I could solve some of the more demanding challenges. I learned about hot keys, functions, and keyboard shortcuts.</p>
          <p>I had to utilize and enhance my time-management skills so that each challenge could be completed in the allotted time given. I had to re-take some of the latter challenges multiple times however I became better with delivering a solution with each and every attempt. It taught me persistence and how to not give up on finding answers to complex problems and that sometimes learning comes through trial and error.</p>
          <p>I received a lot of positive and constructive feedback from the tech trainer whenever I did not pass a challenge. With the feedback received, I was able to apply new approaches and better strategies that I had not initially thought of. Geek Week also taught me how to perform under severe stress. Geek Week showed me how to utilize my data analysis skills to solve problems, and it highlighted for me the importance of learning from others.</p>
        </ContentBlock>

        <ContentBlock title="GitHub & Version Control">
          <p>I learned how to use GitHub by first exploring its basic features like repositories, commits, and branches through online tutorials. As I practiced creating my own projects, I became more comfortable with pushing changes and managing version history.</p>
          <p>I quickly discovered the benefits of branching, which allowed me to experiment with new ideas without disrupting the main codebase. Collaborating with others taught me how to use pull requests to review code, provide feedback, and merge updates smoothly. I also learned how to resolve merge conflicts, which strengthened my problem-solving skills and understanding of team workflows.</p>
          <p>Working on group projects helped me appreciate the importance of clear commit messages and organized repository structures. Over time, GitHub became a natural part of my development process, enabling me to contribute confidently to shared projects.</p>
        </ContentBlock>

        <ContentBlock title="Business Tools">
          <p>I was first introduced to Trello when I began the program, which I had never heard of or used before. I am now comfortable using the software and realized how many features it has incorporated that allow for task management to be effective and efficient. I have used Teams, Zoom, and Outlook as work communication tools to allow me to stay in touch with peers and external parties to ensure collaboration and sharing of information.</p>
        </ContentBlock>

        <ContentBlock title="Typing Speed Growth">
          <p className="font-medium text-accent">I consistently increased my typing speed and improved my accuracy rate throughout the course of the 14-week program utilizing the typeracer.com website. I can now consistently type 40+ WPM with a high of 57 WPM!</p>
        </ContentBlock>
      </PortfolioSection>

      {/* Career Planning Section */}
      <PortfolioSection
        id="career"
        title="Career Planning"
        icon={<Target className="w-6 h-6" />}
        gradient="bg-gradient-primary"
        images={[career1, career2, career3]}
      >
        <ContentBlock title="Short Term Career Goals">
          <p>My short term career plans are to obtain a position working in the tech industry. I would like to obtain a junior level role. My ideal first position would consist of being a Software Developer, Data Analyst, Project Manager, or Business Analyst. I also hope to become a real estate investor in the future.</p>
        </ContentBlock>

        <ContentBlock title="Long Term Career Goals">
          <p>My long term career plans consist of becoming a Senior Project Manager in the tech industry, as well as owning rental property in the city of Chicago.</p>
        </ContentBlock>

        <ContentBlock title="Working with the Program Manager">
          <p>Working with the program manager was a great experience for me. She provided great guidance, inspiration, clear expectations, and ensured that I remained accountable to abide by the requirements and rules of the program. The program manager provided clear structure and coordination helping myself and my entire cohort to work together efficiently and constructively. The program manager provided support in every way, while offering guidance and working to remove roadblocks. Her leadership fostered collaboration, accountability, and confidence amongst the entire cohort.</p>
        </ContentBlock>

        <ContentBlock title="Career Development Director Experience">
          <p>The Career Development Director provided personalized guidance that helped me clarify my career goals and long-term career aspirations. She offered expert advice on professional growth strategies, ensuring that I stay on a path that aligned with my strengths and goals. She provided insights into industry trends to keep me informed about emerging opportunities and career pathways. My experience working with the Career Development Director was overall very positive, rewarding, and informative.</p>
        </ContentBlock>

        <ContentBlock title="Resume & Job Search Preparation">
          <p>When I first started the i.c.stars program, my resume was both out-of-date and did not match industry standards. I have worked with staff and volunteers to update and enhance my resume. My resume is now up-to-date and matches industry standards. I also was advised to ensure that all formatting should be consistent throughout the entire resume.</p>
          <p>I have created a web-based bio profile to assist with job-search preparation. My web-based profile also lists the projects that I have developed or worked on in the past. Also, I have ensured my LinkedIn page is accurate and well-refined, and I have been using my LinkedIn page to network with industry peers and make new connections.</p>
        </ContentBlock>

        <ContentBlock title="Roles of Interest">
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Software Developer</h4>
              <p className="text-sm">I enjoy solving challenges and developing applications that meet user needs. Ability to write clean, efficient, and maintainable code. Strong analytical thinking to break down complex issues. Good understanding of version control using tools like GitHub. Familiar with agile software development methodologies.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Data Analyst</h4>
              <p className="text-sm">Passion for working with data, with an emphasis on data management, manipulation, analysis, and reporting. Ability to examine datasets, identify patterns, draw insights, and answer business questions. Experience in querying databases, joining tables, filtering data, and performing aggregations. Experience using tools like Power BI or Excel for charts, dashboards, and reports.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Project Manager</h4>
              <p className="text-sm">I like to see a software project be well-designed, constructed, and deployed successfully. Ability to delegate tasks and motivate team members throughout the project lifecycle. Great written and verbal communication skills. Able to address challenges quickly, make informed decisions, and keep the project moving forward effectively.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Business Analyst</h4>
              <p className="text-sm">Interest in making business processes flow more efficiently and effectively, which saves money for the company. Skilled in breaking down complex problems, identifying patterns, and developing actionable insights. Competent in analyzing data using Excel, SQL, or BI tools to support business decisions.</p>
            </div>
          </div>
        </ContentBlock>
      </PortfolioSection>

      {/* Wellness Section */}
      <PortfolioSection
        id="wellness"
        title="Wellness"
        icon={<Heart className="w-6 h-6" />}
        gradient="bg-gradient-secondary"
        images={[wellness1, wellness2, wellness3]}
      >
        <ContentBlock title="Financial Wellness Goals">
          <ul className="list-disc list-inside space-y-2">
            <li>Build an emergency fund covering 3–6 months of essential expenses</li>
            <li>Pay off high-interest credit card or personal loan debt</li>
            <li>Save for retirement through consistent contributions to a 401(k), IRA, or similar account</li>
            <li>Purchase a home or other major asset while maintaining a healthy credit profile</li>
          </ul>
        </ContentBlock>

        <ContentBlock title="Emotional Wellness">
          <p>I have challenged negative self-talk by recognizing when my inner dialogue becomes self-sabotaging, doubtful, and intentionally reframing those thoughts into more constructive ones. I try to ignore negative assumptions and replace them with positive reminders of my skills, growth, and past successes.</p>
          <p>When doubts arise, I practice self-compassion and treat myself with the same patience and encouragement I would offer others. This approach has strengthened my confidence and helped me maintain a more balanced, resilient mindset.</p>
        </ContentBlock>

        <ContentBlock title="Mental Wellness Practices">
          <ul className="list-disc list-inside space-y-2">
            <li>Practice regular self-care by prioritizing sleep, balanced nutrition, and physical activity</li>
            <li>Maintain healthy boundaries to manage stress and protect your time and energy</li>
            <li>Use mindfulness or reflection practices, such as meditation or journaling, to process emotions and stay grounded</li>
            <li>Build and nurture supportive relationships by staying connected with friends, family, or mentors</li>
          </ul>
        </ContentBlock>

        <ContentBlock title="Physical Wellness Resources">
          <ul className="list-disc list-inside space-y-2">
            <li>My local clinic</li>
            <li>The hospital near my house</li>
            <li>Planet Fitness</li>
            <li>Park district field house</li>
          </ul>
        </ContentBlock>
      </PortfolioSection>

      {/* Footer */}
      <footer className="bg-gradient-hero text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">i.c.stars C58 Digital Portfolio</p>
          <p className="text-white/60 text-sm">14 Weeks of Growth, Learning & Transformation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
