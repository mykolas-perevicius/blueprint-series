import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Introduction from '../../components/Introduction';
import Agenda from '../../components/Agenda';
import Speakers from '../../components/Speakers';
import EventDetail from '../../components/EventDetail';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';
import {
  getEventInfo,
  getIntroduction,
  getAgenda,
  getSpeakers,
  getEventDetail,
  getPreviousEvents,
  getFAQ
} from '../../lib/api';

export default async function EventPage({ params }) {
  const { slug } = await params;
  
  try {
    // Fetch all data from API endpoints
    const [info, introduction, agenda, speakers, detail, previousEvents, faq] = await Promise.all([
      getEventInfo(slug),
      getIntroduction(slug),
      getAgenda(slug),
      getSpeakers(slug),
      getEventDetail(slug),
      getPreviousEvents(slug),
      getFAQ(slug)
    ]);

    return (
      <>
        <Navbar />
        <Hero info={info} />
        <Introduction data={introduction} />
        <Agenda data={agenda} />
        <Speakers speakers={speakers} />
        <EventDetail detail={detail} previousEvents={previousEvents} />
        <FAQ items={faq} />
        <Footer />
      </>
    );
  } catch (error) {
    notFound();
  }
}

// Generate static paths for known events
export async function generateStaticParams() {
  return [
    { slug: 'rich-tu' },
    { slug: 'maya-johnson' }
  ];
}
