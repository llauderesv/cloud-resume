import {ThemeProvider} from 'styled-components';
import {
  Margin,
  VisitorCount,
  Text,
  Page,
  Header,
  Section,
  InfoHeader,
  H2,
  Body,
  Lists,
  CurrentYear,
  ToggleTheme,
} from './components';
import {useTrackPageView} from './hooks/useTrackPageView';
import {darkTheme, lightTheme} from './theme';
import {GlobalStyles} from './GlobalStyles';
import usePageTheme from './hooks/usePageTheme';

const App = (): JSX.Element => {
  const pageViewCount = useTrackPageView();
  const {theme, toggleTheme} = usePageTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <VisitorCount count={pageViewCount} />
      <ToggleTheme onClick={toggleTheme} theme={theme} />
      <Page>
        <Header
          name='Vincent C. Llauderes'
          address='Metro Manila Philippines'
          mobile='+63 961 427 9309'
          email='llauderesv@gmail.com'
          gitHub='github.com/llauderesv'
          photoSrc={require('./images/photo.png')}
        />
        <Section title='Summary'>
          <Text>
            Highly skilled in developing and deploying scalable applications in the cloud
            with extensive knowledge and expertise working on Kubernetes platform.
            Experienced in architected distributed applications to be deployed in cloud.
            Skilled in using Helm Charts and integrating to CI/CD pipelines with Jenkins
            and GitHub Actions. Strong expertise in ReactJS for developing frontend
            applications and REST API Express JS for the backend.
          </Text>
        </Section>

        <Section title='Certifications'>
          <Lists.Inline>
            <li>AZ-900</li>
            <li>Terraform Associate</li>
            <li>CKAD</li>
            <li>Redis for JavaScript Developer</li>
          </Lists.Inline>
        </Section>

        <Section title='Technical Skills'>
          <Lists.Inline>
            <li>Kubernetes</li>
            <li>TypeScript</li>
            <li>AWS</li>
            <li>GitHub Action</li>
            <li>Argo CD</li>
            <li>Elastic Kubernetes Service</li>
            <li>JavaScript</li>
            <li>Bash</li>
            <li>Azure</li>
            <li>Docker</li>
            <li>AKS (Azure Kubernetes Service)</li>
            <li>Istio (Service Mesh)</li>
            <li>Flux CD</li>
            <li>C#</li>
            <li>ExpressJS</li>
            <li>REST APIs</li>
            <li>React</li>
            <li>Redux</li>
            <li>React Native</li>
            <li>New Relic</li>
            <li>Devo</li>
            <li>Jest</li>
          </Lists.Inline>
        </Section>

        <Body>
          <Margin top={40}>
            <hr />
            <H2>Experience</H2>
            <Section>
              <InfoHeader
                title='Software Engineer L3'
                text='Asurion'
                date='Oct 2023 - Present'
                active
              />

              <Lists.Default>
                <li>
                  Migrate our Spinnaker application deployment to use ArgoCD to promote
                  the GitOps deployment. This enhances the consistency and repeatability
                  of our application deployments across different environments.
                </li>
                <li>
                  I was assigned to present at the Asurion Tech Council Senior Leader
                  level to showcase our service's broader capabilities and usability
                  within the org in promoting Address Standardization.
                </li>
                <li>
                  Designed and implemented multi-region AWS infrastructure using AWS CDK
                  constructs, enabling high availability and disaster recovery for
                  critical applications across multiple AWS regions.
                </li>
                <li>
                  Migrated legacy applications to utilize containerization with Docker and
                  Helm for deployment to AWS EKS Cluster.
                </li>
                <li>
                  Automate the deployment of Applications using ArgoCD end-to-end to K8s
                  Cluster.
                </li>
                <li>Transitioned Jenkins Pipeline to GitHub Actions.</li>
                <li>
                  Automate provisioning of AWS resources using infrastructure as code,
                  such as AWS CDK. This ensures optimal performance and usability.
                </li>
                <li>
                  Set up an ELK (Elastic, Logstash, & Kibana) stack monitoring tool for
                  log collection and monitoring in the EKS cluster which helps application
                  developers with log visualization.
                </li>
                <li>
                  Transformed legacy application software and migrated it to Node.js
                  Express JS.
                </li>
                <li>
                  Reduced technical debt and developed features in one of Asurion's core
                  internal microservice applications.
                </li>
                <li>
                  Provided training to the DevOps team and coached software engineering
                  teams on using modern technology stacks, fostering a software
                  engineering mindset.
                </li>
                <li>
                  Contributed to the Inner Source Tool Asurion Cloud Development Kit, a
                  tool used to deploy applications to AWS.
                </li>
              </Lists.Default>
            </Section>

            <hr />
            <Section>
              <InfoHeader
                title='Full-Stack Software Engineer'
                text='Manulife CDT Engineering Transformation'
                date='June 2021 - October 2023'
              />

              <Lists.Default>
                <li>
                  Develop and create scalable microservices architecture using NestJS
                  framework in creating the Model Application for the students that
                  they're going to use in launching the Manulife University Quality
                  Engineering Program.
                </li>
                <li>
                  Setup best coding practices in starting the Model App project in
                  Manulife University Quality Engineering Model app by using the style
                  guide of Bullet Proof React published GitHub.
                </li>
                <li>
                  Conducted thorough unit testing using testing frameworks like Jest to
                  ensure software quality and reliability in develop features in Manulife
                  University Quality Engineering Model Application.
                </li>
                <li>
                  Contribute and develop features using ReactJS and ExpressJS (REST API)
                  into Manulife University Evaluation Tool that evaluates students
                  performance after attending the Manulife University Programs.
                </li>
                <li>
                  Implemented a Cloud Cost Optimization initiatives in our Azure
                  Subscription to reduce our monthly consumption by almost 75% in the team
                  by automatically shutting down the AKS Cluster and choosing the
                  appropriate SKUs in cloud Resources base on what we needed.
                </li>
                <li>
                  Automate the process of cleaning up the resources of the students after
                  the program in Azure environment, GitHub and Jenkins Pipeline built on
                  REST API Express JS.
                </li>
                <li>
                  Lead the team in migrating ReactJS application and REST APIs ExpressJS
                  from Pivotal Cloud Foundry into Azure Kubernetes Service, involved
                  dockerizing the app, setting up helm charts and Istio Service Mesh.
                </li>
                <li>
                  Setup Istio Service Mesh in Manulife University Asia students' AKS
                  Cluster and configured Virtual Services, Destination Rules, and Gateways
                  for fine-grained traffic routing and load balancing for the
                  Microservices application.
                </li>
                <li>
                  Participated in code reviews to coached team members to ensure best
                  practices are followed in dockerizing apps and deployment of
                  applications on Azure Kubernetes Service (AKS).
                </li>
                <li>
                  Highly Proficient in using Terraform to automate the provisioning
                  infrastructure in Azure.
                </li>
                <li>
                  Created a NodeJS CLI Tool that helps students to deploy their
                  application into Azure Kubernetes Service (AKS) into their command line.
                </li>
                <li>
                  Be part of the team, and lead architecting the front-end by using
                  ReactJS in doing proof of concept to migrate Manulife Group Benefits
                  legacy application to use Modern technology stack.
                </li>
                <li>
                  Created standard k8s deployment yaml files for the students that they're
                  going to use to deploy their application into Azure Kubernetes Service
                  (AKS).
                </li>
                <li>
                  Created and updated students' labs in Manulife University Software
                  Engineering Course by using Modern Technology Stack such as ReactJS,
                  Redux, GraphQL, MongoDB.
                </li>
                <li>
                  Provision and manage Azure SQL Database, CosmosDB, Azure Kubernetes
                  Service, Azure Container Registry, Blob storage account using Terraform.
                </li>
                <li>
                  Guest speaker at StackLeague event and talked about Demystifying
                  Microservices: Containerization and Orchestration topic to represent
                  Canada Division Technology to attract candidates to join Manulife.
                </li>
                <li>
                  Conduct training with 100+ people in Manulife to train them to migrate
                  their application in the cloud and to be deployed in to Azure Kubernetes
                  Service (AKS).
                </li>
                <li>
                  Capability building and teach new hires and employees and mentoring
                  software engineers to use Modern technology stacks such as React, Redux,
                  GraphQL and NodeJS, and other Manulife-relevant software engineering
                  tools.
                </li>
              </Lists.Default>
            </Section>

            <hr />
            <Section>
              <InfoHeader
                title='Software Engineer'
                text='SYKES Philippines'
                date='March 2019 - June 2021'
              />

              <Lists.Default>
                <li>
                  Lead Developer and responsible for conducting code reviews in the team
                  to maintain project quality and mentoring junior developers.
                </li>
                <li>
                  Design a ground-up mobile application using React Native and integrate
                  Firebase Cloud Messaging to handle Push Notification.
                </li>
                <li>
                  Re-architect Back-End code using Clean Architecture and SOLID Design
                  Principles.
                </li>
                <li>
                  Set up CI/CD Pipeline in Azure DevOps to automate the deployment process
                  of the App.
                </li>
                <li>
                  Revamp existing Mobile App developed in Xamarin and convert to React
                  Native to increase developer productivity and improve User Experience.
                </li>
              </Lists.Default>
            </Section>

            <hr />
            <Section>
              <InfoHeader
                title='Associate Software Engineer'
                text='SYKES Philippines'
                date='April 2017 - March 2019'
              />

              <Lists.Default>
                <li>
                  Integrate ReactJS into existing web applications to make it easy to
                  build user interfaces and help the developers to become productive.
                </li>
                <li>
                  Implemented new features and performed bug fixes in Sykes Referral
                  Mobile app using Xamarin Framework (e.g., Xamarin.Android and
                  Xamarin.iOS).
                </li>
                <li>
                  Participate in a Data Warehouse project to separate the report in
                  existing applications when generating a report to avoid latency.
                </li>
                <li>
                  Optimize query in SQL Server using Indexes to reduce load time and
                  latency in the Web App.
                </li>
              </Lists.Default>
            </Section>

            <hr />
            <Section title='Education'>
              <InfoHeader
                title='STI College Caloocan'
                text='Bachelor of Science in Information Technology'
                date='2013 - 2017'
              />
            </Section>
          </Margin>
        </Body>
      </Page>
      <footer
        style={{
          margin: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text fontSize='15px' color='#cbcbcb'>
          Copyright © {<CurrentYear />}. All rights reserved.
        </Text>
      </footer>
    </ThemeProvider>
  );
};

export default App;
