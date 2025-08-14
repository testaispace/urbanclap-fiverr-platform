import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>UrbanClap + Fiverr</Text>
        <Text style={styles.headerSubtitle}>Local Services & Digital Freelancing</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Service Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏠 Local Services (UrbanClap)</Text>
          <View style={styles.serviceGrid}>
            <ServiceCard title="🧹 Home Cleaning" />
            <ServiceCard title="💇‍♀️ Beauty & Salon" />
            <ServiceCard title="🔧 Home Repairs" />
            <ServiceCard title="🚚 Moving & Packing" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💻 Digital Services (Fiverr)</Text>
          <View style={styles.serviceGrid}>
            <ServiceCard title="🎨 Graphic Design" />
            <ServiceCard title="📝 Content Writing" />
            <ServiceCard title="🎥 Video Editing" />
            <ServiceCard title="📈 SEO & Marketing" />
          </View>
        </View>

        {/* Provider Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👨‍💼 For Service Providers</Text>
          <Text style={styles.providerText}>
            • Set your own rates and availability
            • Toggle on-duty/off-duty status like Uber
            • Receive nearby service alerts
            • Manage both local and digital services
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function ServiceCard({ title }) {
  return (
    <TouchableOpacity style={styles.serviceCard}>
      <Text style={styles.serviceCardText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007bff',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e3f2fd',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceCardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  providerText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
