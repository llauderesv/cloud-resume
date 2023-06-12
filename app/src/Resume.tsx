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
  Col,
  Lists,
} from './components';
import {useTrackPageView} from './hooks/useTrackPageView';

function Resume() {
  const pageViewCount = useTrackPageView();

  return (
    <>
      <VisitorCount count={pageViewCount} />
      <Page>
        <Header
          name='Vincent C. Llauderes'
          address='166 Corinthian St. General Malvar Ext. Bagong Barrio Caloocan City'
          mobile='+63 961 527 9309'
          email='llauderesv@gmail.com'
          gitHub='github.com/llauderesv'
          photoSrc={require('./images/photo.png')}
        />
        <Section title='Summary'>
          <Text>
            Highly skilled in developing and deploying scalable applications in the cloud
            with extensive knowledge and expertise working on Kubernetes platform.
            Experienced in architecting distributed applications to be deployed in cloud.
            Skilled in using Helm Charts and integrating to CI/CD pipelines with Jenkins
            and GitHub Actions. Strong expertise in ReactJS for developing frontend
            applications and REST API Express JS for the backend.
          </Text>
        </Section>

        <Body>
          <Col>
            <Section title='Certifications'>
              <Lists.Inline>
                <li>AZ-900</li>
                <li>Terraform Associate</li>
                <li>CKAD</li>
              </Lists.Inline>
            </Section>
            <Section title='Technical Skills'>
              <Lists.Inline>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Bash</li>
                <li>Azure</li>
                <li>Docker</li>
                <li>Kubernetes</li>
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
            <Margin top={20}>
              <H2>Experience</H2>
              <Section title='Full-Stack Software Engineer'>
                <InfoHeader
                  title='Manulife IT Delivery Center'
                  text='NEX Tower, Ayala Ave, Makati, Metro Manila'
                  date='06/21/2021 - Present'
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
                    ensure software quality and reliability in develop features in
                    Manulife University Quality Engineering Model Application.
                  </li>
                  <li>
                    Contribute and develop features using ReactJS and ExpressJS (REST API)
                    into Manulife University Evaluation Tool that evaluates students
                    performance after attending the Manulife University Programs.
                  </li>
                  <li>
                    Implemented a Cloud Cost Optimization initiatives in our Azure
                    Subscription to reduce our monthly consumption by almost 75% in the
                    team by automatically shutting down the AKS Cluster and choosing the
                    appropriate SKUs in cloud Resources base on what we needed.
                  </li>
                  <li>
                    Automate the process of cleaning up the resources of the students
                    after the program in Azure environment, GitHub and Jenkins Pipeline
                    built on REST API Express JS.
                  </li>
                  <li>
                    Lead the team in migrating ReactJS application and REST APIs ExpressJS
                    from Pivotal Cloud Foundry into Azure Kubernetes Service, involved
                    dockerizing the app, setting up helm charts and Istio Service Mesh.
                  </li>
                  <li>
                    Setup Istio Service Mesh in Manulife University Asia students' AKS
                    Cluster and configured Virtual Services, Destination Rules, and
                    Gateways for fine-grained traffic routing and load balancing for the
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
                    application into Azure Kubernetes Service (AKS) into their command
                    line.
                  </li>
                  <li>
                    Be part of the team, and lead architecting the front-end by using
                    ReactJS in doing proof of concept to migrate Manulife Group Benefits
                    legacy application to use Modern technology stack.
                  </li>
                </Lists.Default>
              </Section>
            </Margin>
          </Col>
          <Col>
            <Section>
              <Lists.Default>
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
            <Section title='Software Engineer'>
              <InfoHeader
                title='SYKES Philippines'
                text='K-Pointe Building, Gilmore, Aurora, Quezon City'
                date='03/22/2019 - 06/21/2021'
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

            <Section title='Associate Software Engineer'>
              <InfoHeader
                title='SYKES Philippines'
                text='K-Pointe Building, Gilmore, Aurora, Quezon City'
                date='04/20/2017 - 03/22/2019'
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

            <Section title='Education'>
              <InfoHeader
                title='STI College Caloocan'
                text='Bachelor of Science in Information Technology'
                date='2013 - 2019'
              />
            </Section>
          </Col>
        </Body>
      </Page>
    </>
  );
}

export default Resume;
