import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import TinderView from './components/TinderView';
import SummaryView from './components/SummaryView';

const App: React.FC = () => {
  const [view, setView] = useState<'tinder' | 'summary'>('tinder');
  const [goodLots, setGoodLots] = useState<any[]>([]);
  const [badLots, setBadLots] = useState<any[]>([]);

  const handleEndTinder = (good: any[], bad: any[]) => {
    setGoodLots(good);
    setBadLots(bad);
    setView('summary');
  };

  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto p-4">
        {view === 'tinder' && <TinderView onEndSession={handleEndTinder} />}
        {view === 'summary' && <SummaryView goodLots={goodLots} badLots={badLots} />}
      </div>
    </ApolloProvider>
  );
};

export default App;
