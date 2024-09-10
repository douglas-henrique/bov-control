import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppStack from '@/navigation';
import Checklist from '@/database/schemas/Checklist';
import { Farmer, Location } from '@/database/schemas';
// import { Checklist, Farmer, From, To, Location } from '@/database/schemas'
// import { createRealmContext, Realm } from '@realm/react';
// Realm.copyBundledRealmFiles();
// const realmContext = createRealmContext({ schema: [Farmer, Location, Checklist], path: 'bundle.realm', schemaVersion: 2 });
// const { RealmProvider } = realmContext;
import { RealmProvider } from '@realm/react';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 5 * 60 * 1000, // 5 minutos
      // cacheTime: 10 * 60 * 1000, // 10 minutos
      // refetchOnWindowFocus: false,
    },
  },
});


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <RealmProvider schema={[Farmer, Location, Checklist]} path='bundle.realm' schemaVersion={6} >
      <QueryClientProvider client={queryClient}>
        <AppStack />
      </QueryClientProvider>
    </RealmProvider>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>

    //   </ScrollView>
    // </SafeAreaView>
  );
}



export default App;
