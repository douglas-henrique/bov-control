import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppStack from '@/navigation';
import { RealmProvider } from '@realm/react';
import { Checklist, Farmer, From, To, Location } from '@/models'

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
    <RealmProvider schema={[Checklist, Farmer, From, To, Location]}>
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
