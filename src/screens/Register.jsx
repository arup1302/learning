import React, {useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {colors} from '../themes/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {fonts} from '../themes/fonts';
import RBSheet from 'react-native-raw-bottom-sheet';

// import ButtonComp from '../../components/ButtonComp';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {
  BagIcon,
  BellIcon,
  CrossIcon,
  ForwardIcon,
  HeartIcon,
  PrivacyIcon,
} from '../themes/icons';
import {axios} from '../utils/axios';
import ButtonComp from '../comman/ButtonComp';

const menuItems = [
  {
    icon: <BellIcon />,
    title: 'Orders',
    description: 'Check your order status',
  },
  {
    icon: <PrivacyIcon />,
    title: 'Help Center',
    description: 'Help regarding your recent purchase',
  },
  {
    icon: <BagIcon />,
    title: 'WishList',
    description: 'Check your order status',
  },
  {
    icon: <HeartIcon />,
    title: 'Orders',
    description: 'Check your order status',
  },
];

const Register = onPress => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const cancelRef = useRef();
  const handleContinuePress = async () => {
    if (!name || !email || !mobile || !password) {
      Alert.alert('Validation Error', 'Please fill in all details.');
      return;
    }
    setLoading(true);
    try {
      const data = {
        name,
        email,
        mobile,
        password,
      };
      const res = await axios.post('customer/sign-up', data);
      console.log('API Response:', res.data);
      setLoading(false);
      // navigation.navigate('VerifyOtp');
    } catch (error) {
      console.log('API Error:', error);
      setLoading(false);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  const LinkText = ({children, onPress}) => (
    <Text style={{color: colors.PINK, fontWeight: 'bold'}} onPress={onPress}>
      {children}
    </Text>
  );
  const handleOpenSheet = () => {
    cancelRef.current?.open(); // Open the RBSheet when called
  };

  return (
    <ScrollView style={{backgroundColor: colors.WHITE}}>
      <Text style={styles.textInput}>Profile</Text>

      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/user.png')}
            style={styles.profileImage}
          />
        </View>
        <TouchableOpacity
          style={styles.signupContainer}
          onPress={handleOpenSheet}>
          <Text
            style={{
              textAlign: 'center',
              color: colors.WHITE,
              fontFamily: fonts.POPPINS_BOLD,
              marginTop: verticalScale(6),
            }}>
            {' '}
            LOG IN / SIGNUP{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} {...menuItem} />
      ))}
      {/* <View style={styles.separator}></View> */}
      <View style={styles.faqINdex}>
        <TouchableOpacity>
          <Text style={styles.footer}>FAQs </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.footer}>ABOUT US</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.footer}>TERMS OF USE</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.footer}>PRIVACY POLICY</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={cancelRef}
        // openDuration={1000000000}
        customStyles={{
          container: {
            height: verticalScale(600),
            backgroundColor: colors.WHITE,
            borderTopLeftRadius: moderateScale(6),
            borderTopRightRadius: moderateScale(6),
          },
        }}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/splash.jpeg')}
            style={styles.logoImage}
          />
          <TouchableOpacity onPress={() => cancelRef.current?.close()}>
            <CrossIcon style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainerNew}>
          <Image
            source={require('../assets/images/user.png')}
            style={styles.saleImage}
          />
        </View>

        <View style={styles.defaultPadding}>
          <Text style={styles.titleText}>Login</Text>
          <Text style={styles.orText}>or</Text>
          <Text style={styles.titleText}>Signup</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Name"
            onChangeText={setName}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Email ID"
            onChangeText={setEmail}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="numnber"
            keyboardType="numeric"
            maxLength={12}
            onChangeText={setMobile}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.termsContainer}>
          <Text>
            By continuing, I agree to the <LinkText>Terms of Use</LinkText> &{' '}
            <LinkText>Privacy Policy</LinkText>
          </Text>
        </View>
        <ButtonComp />
      </RBSheet>
    </ScrollView>
  );
};

const MenuItem = ({icon, title, description}) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuItemContent}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.menuItemTitle}>{title}</Text>
        <Text style={styles.menuItemDescription}>{description}</Text>
      </View>
    </View>
    <ForwardIcon />
  </TouchableOpacity>
);
export default Register;
const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: colors.GRAY,
    height: '20%',
    width: '100%',
    marginTop: verticalScale(10),
    paddingHorizontal: '5%',
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  faqINdex: {
    marginLeft: '8%',
  },
  imageContainer: {
    backgroundColor: colors.WHITE,
    height: '70%',
    width: '30%',
    marginTop: '27%',
  },
  profileImage: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.WHITE,
  },
  signupContainer: {
    backgroundColor: colors.PINK,
    height: '25%',
    width: '60%',
    marginTop: '45%',
    borderRadius: scale(5),
  },
  separator: {
    backgroundColor: colors.GRAY_BACKGROUNDD,
    height: '2%',
    width: '100%',
    marginTop: '15%',
    flexDirection: 'row',
  },
  menuItem: {
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '2%',
    paddingHorizontal: '5%',
  },
  menuItemContent: {
    flexDirection: 'row',
    gap: scale(10),
    alignItems: 'center',
  },
  iconContainer: {
    width: scale(22),
  },
  textContainer: {
    flex: 1,
  },
  menuItemTitle: {
    fontFamily: fonts.POPPINS_BOLD,
    fontWeight: 'bold',
    fontSize: scale(14),
    color: colors.GRAY_TEXT_SECONDARY,
  },
  menuItemDescription: {
    color: colors.GRAY,
  },
  footer: {
    color: colors.GRAY,
    fontFamily: fonts.POPPINS_SEMIBOLD,
    fontWeight: 'bold',
    fontSize: scale(14),
    paddingTop: '2%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(10),
  },
  logoImage: {
    height: scale(50),
    width: scale(50),
  },
  closeIcon: {
    marginRight: scale(10),
  },
  imageContainerNew: {
    alignItems: 'center',
  },
  saleImage: {
    height: 200,
    width: 200,
  },
  defaultPadding: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
    padding: '5%',
  },
  titleText: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontFamily: fonts.POPPINS_BOLD,
    fontSize: scale(18),
    padding: 1,
  },
  orText: {
    fontSize: scale(18),
    color: colors.BLACK,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: '2%',
  },
  searchInput: {
    flex: 1,
    height: scale(35),
  },
  termsContainer: {
    paddingHorizontal: '5%',
    alignItems: 'center',
    padding: '4%',
  },
  buttonContainer: {},
  continueButton: {
    backgroundColor: colors.PINK,
    paddingHorizontal: '5%',
    width: '90%',
    alignSelf: 'center',
  },
  continueButtonText: {
    color: colors.WHITE,
  },
  helpContainer: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: '8%',
    marginBottom: verticalScale(20),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: colors.GRAY,
    fontFamily: fonts.POPPINS_BOLD,
    fontWeight: 'bold',
    fontSize: scale(15),
  },
});
