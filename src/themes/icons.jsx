import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from './colors';
import {VectorIconProps} from '@/utils/types';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export const HeartIcon = props => <Feather name="heart" size={24} {...props} />;
export const BrandIcon = props => (
  <FontAwesome5Icon name="brand" size={24} {...props} />
);

export const MicIcon = props => <Feather name="mic" size={24} {...props} />;
export const DowmnIcon = props => (
  <AntDesign name="down" size={24} {...props} />
);
export const BellIcon = props => (
  <AntDesign name="bells" size={24} {...props} />
);

export const CameraOutlineIcon = props => (
  <AntDesign name="camerao" size={24} {...props} />
);

export const BagIcon = props => (
  <Ionicons name="bag-outline" size={24} {...props} />
);

export const EyeIcon = props => <Ionicons name="eye" size={24} {...props} />;

export const EyeSlashIcon = props => (
  <Ionicons name="eye-off" size={24} {...props} />
);

export const BackIcon = props => (
  <Ionicons name="chevron-back" size={24} {...props} />
);
export const ForwardIcon = ({color, size}) => (
  <MaterialCommunityIcons
    name="chevron-right"
    size={size ? size : 24}
    color={color ? color : '#000000'}
  />
);
export const DownIcon = ({size, color}) => (
  <Ionicons
    name="chevron-down"
    size={size ? size : 24}
    color={color ? color : colors.BLACK}
  />
);

export const UpIcon = ({size, color}) => (
  <Ionicons
    name="chevron-up"
    size={size ? size : 24}
    color={color ? color : colors.BLACK}
  />
);

export const CrossIcon = props => <Entypo name="cross" size={24} {...props} />;
export const PointIcon = props => (
  <Entypo name="controller-record" size={18} {...props} color={props.color} />
);
// export const CheckIcon = props => (
//   <AntDesign name="checksquareo" size={24} {...props} />
// );
export const CheckBoxIcon = props => (
  <Fontisto name="checkbox-passive" size={20} {...props} />
);
export const SearchIcon = props => (
  <Ionicons name="search" size={24} {...props} color={'#000'} />
);
export const CameraIcon = props => (
  <FontAwesome
    name="camera"
    size={24}
    {...props}
    style={{color: props.color ? props.color : '#fff'}}
  />
);
export const RadioOffIcon = props => (
  <Ionicons name="radio-button-off-sharp" size={24} {...props} />
);
export const RadioOnIcon = props => (
  <Ionicons name="radio-button-on" size={24} {...props} />
);

export const UserIcon = props => (
  <Feather name="users" size={24} {...props} style={{color: colors.BLUE}} />
);
export const Hourglass = props => (
  <Ionicons
    name="hourglass-outline"
    size={24}
    {...props}
    style={{color: colors.BLUE}}
  />
);

export const FaqIcon = props => (
  <MaterialCommunityIcons
    name="frequently-asked-questions"
    size={24}
    {...props}
  />
);

export const NoteIcon = props => (
  <MaterialCommunityIcons name="note-text-outline" size={24} {...props} />
);

export const PrivacyIcon = props => (
  <MaterialIcons name="privacy-tip" size={24} {...props} />
);

export const LogoutIcon = props => (
  <MaterialIcons name="power-settings-new" size={24} {...props} />
);

export const CircleIcon = props => (
  <AntDesign name="checkcircle" size={24} {...props} style={{color: '#fff'}} />
);

export const EditIcon = props => (
  <Feather name="edit" size={24} {...props} style={{color: colors.BLACK}} />
);

export const SaveIcon = props => (
  <Ionicons
    name="save-outline"
    size={24}
    {...props}
    style={{color: colors.BLACK}}
  />
);
export const ExitIcon = props => (
  <Ionicons
    name="exit-outline"
    size={24}
    {...props}
    style={{color: colors.BLACK}}
  />
);
export const CheckIcon = props => <Entypo name="check" size={24} {...props} />;
export const MenuIcon = props => (
  <Entypo
    name="dots-three-vertical"
    size={18}
    {...props}
    color={colors.BLACK}
  />
);
export const MapIcon = props => (
  <FontAwesome name="map-o" size={24} {...props} />
);

export const CheckFill = props => (
  <Ionicons name="checkbox" size={28} {...props} />
);
export const AlingnLeft = props => (
  <Feather name="align-left" size={28} {...props} color={colors.BLUE} />
);

export const CreditIcon = props => (
  <AntDesign name="creditcard" size={24} {...props} />
);
export const PencilIcon = props => (
  <Octicons name="pencil" size={18} {...props} color={props.color} />
);

export const RightMenuIcon = props => (
  <Entypo name="dots-three-vertical" size={18} {...props} color={props.color} />
);

export const PdfIcon = props => (
  <AntDesign name="pdffile1" size={28} {...props} color={colors.BLUE} />
);

export const CloseCircle = props => (
  <AntDesign name="closecircleo" size={28} {...props} color={colors.BLACK} />
);

export const CheckCircleIcon = props => (
  <AntDesign name="checkcircleo" size={28} {...props} color={colors.BLACK} />
);
