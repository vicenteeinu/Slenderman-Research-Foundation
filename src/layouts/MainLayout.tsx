import type { ReactNode } from "react";
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import ContentContainer from "../components/ContentContainer";
import PageWrapper from "./PageWrapper";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <PageWrapper>
      <div className="w-full mx-auto">
          <Header/>
          <NavBar/>

          <ContentContainer>
            {
              children
            }
          </ContentContainer>

      </div>
    </PageWrapper>
  );
}