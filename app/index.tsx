import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from '@/constants';
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome
} from '@/components';

export default function Home() {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            {/* <Text>Home</Text> */}
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                        />
                    ),
                    headerTitle: ''
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
