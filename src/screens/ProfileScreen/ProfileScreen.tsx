import { Auth } from 'aws-amplify';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ProfileScreen = () => {
  const accountSettings = [
    {
      id: '1',
      title: 'Personal Information',
    },
    {
      id: '2',
      title: 'Payments and payouts',
    },
    {
      id: '3',
      title: 'Notifications',
    },
    {
      id: '4',
      title: 'Travel for work',
    },
  ];

  return (
    <SafeAreaView>
      <FlatList
        data={accountSettings}
        ListHeaderComponent={() => (
          <>
            {/* Profile Picture + Name */}
            <UserProfile />
            {/* Banner */}
            <Banner />

            {/* Account Settings Header */}
            <View style={{ margin: 20 }}>
              <Text style={{ fontSize: 12, color: '#444', fontWeight: '400' }}>
                Account Settings
              </Text>
            </View>
          </>
        )}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                marginTop: index === 0 ? 10 : 0,
                marginBottom: 20,
                marginHorizontal: 20,
                height: 40,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: '300' }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* Hosting */}

      {/* Referrals & Credits */}
    </SafeAreaView>
  );
};

const UserProfile = () => {
  const logout = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <View style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 20 }}>
      <Image
        source={{
          uri:
            'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
        }}
        style={{
          height: 70,
          width: 70,
          resizeMode: 'contain',
          borderRadius: 35,
        }}
      />
      <View style={{ justifyContent: 'center', marginLeft: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Enrique</Text>
        <TouchableOpacity onPress={logout}>
          <Text style={{ fontSize: 16, color: '#00A699' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Banner = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
      }}
    >
      <View>
        <Text style={{ fontSize: 17, fontWeight: '300' }}>
          Earn money from your extra space
        </Text>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00A699' }}>
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
