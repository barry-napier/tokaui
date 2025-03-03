import { Metadata } from 'next';
import { IconGrid } from '@/components/dashboard/icon-grid';
import {
  AlertCircle,
  ArrowRight,
  Bell,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Copy,
  CreditCard,
  Download,
  Edit,
  ExternalLink,
  Eye,
  File,
  Filter,
  Folder,
  Heart,
  Home,
  Image,
  Info,
  Link,
  Lock,
  Mail,
  Menu,
  MessageSquare,
  MoreHorizontal,
  MoreVertical,
  Phone,
  Plus,
  Search,
  Settings,
  Share,
  ShoppingCart,
  Star,
  Trash,
  Upload,
  User,
  X,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Assets | Toka',
  description: 'Manage icons, images, and other media assets for your design system',
};

export default function AssetsPage() {
  // Sample icons using Lucide React
  const uiIcons = [
    {
      name: 'ArrowRight',
      component: <ArrowRight className="h-6 w-6" />,
      reference: '<ArrowRight />',
    },
    { name: 'Bell', component: <Bell className="h-6 w-6" />, reference: '<Bell />' },
    { name: 'Check', component: <Check className="h-6 w-6" />, reference: '<Check />' },
    {
      name: 'ChevronDown',
      component: <ChevronDown className="h-6 w-6" />,
      reference: '<ChevronDown />',
    },
    { name: 'Copy', component: <Copy className="h-6 w-6" />, reference: '<Copy />' },
    { name: 'Edit', component: <Edit className="h-6 w-6" />, reference: '<Edit />' },
    {
      name: 'ExternalLink',
      component: <ExternalLink className="h-6 w-6" />,
      reference: '<ExternalLink />',
    },
    { name: 'Eye', component: <Eye className="h-6 w-6" />, reference: '<Eye />' },
    { name: 'Filter', component: <Filter className="h-6 w-6" />, reference: '<Filter />' },
    { name: 'Heart', component: <Heart className="h-6 w-6" />, reference: '<Heart />' },
    { name: 'Link', component: <Link className="h-6 w-6" />, reference: '<Link />' },
    { name: 'Menu', component: <Menu className="h-6 w-6" />, reference: '<Menu />' },
    {
      name: 'MoreHorizontal',
      component: <MoreHorizontal className="h-6 w-6" />,
      reference: '<MoreHorizontal />',
    },
    {
      name: 'MoreVertical',
      component: <MoreVertical className="h-6 w-6" />,
      reference: '<MoreVertical />',
    },
    { name: 'Plus', component: <Plus className="h-6 w-6" />, reference: '<Plus />' },
    { name: 'Search', component: <Search className="h-6 w-6" />, reference: '<Search />' },
    { name: 'Settings', component: <Settings className="h-6 w-6" />, reference: '<Settings />' },
    { name: 'Share', component: <Share className="h-6 w-6" />, reference: '<Share />' },
    { name: 'Trash', component: <Trash className="h-6 w-6" />, reference: '<Trash />' },
    { name: 'X', component: <X className="h-6 w-6" />, reference: '<X />' },
  ];

  const communicationIcons = [
    {
      name: 'AlertCircle',
      component: <AlertCircle className="h-6 w-6" />,
      reference: '<AlertCircle />',
    },
    { name: 'Info', component: <Info className="h-6 w-6" />, reference: '<Info />' },
    { name: 'Mail', component: <Mail className="h-6 w-6" />, reference: '<Mail />' },
    {
      name: 'MessageSquare',
      component: <MessageSquare className="h-6 w-6" />,
      reference: '<MessageSquare />',
    },
    { name: 'Phone', component: <Phone className="h-6 w-6" />, reference: '<Phone />' },
  ];

  const objectIcons = [
    { name: 'Calendar', component: <Calendar className="h-6 w-6" />, reference: '<Calendar />' },
    { name: 'Clock', component: <Clock className="h-6 w-6" />, reference: '<Clock />' },
    {
      name: 'CreditCard',
      component: <CreditCard className="h-6 w-6" />,
      reference: '<CreditCard />',
    },
    { name: 'Download', component: <Download className="h-6 w-6" />, reference: '<Download />' },
    { name: 'File', component: <File className="h-6 w-6" />, reference: '<File />' },
    { name: 'Folder', component: <Folder className="h-6 w-6" />, reference: '<Folder />' },
    { name: 'Home', component: <Home className="h-6 w-6" />, reference: '<Home />' },
    { name: 'Image', component: <Image className="h-6 w-6" />, reference: '<Image />' },
    { name: 'Lock', component: <Lock className="h-6 w-6" />, reference: '<Lock />' },
    {
      name: 'ShoppingCart',
      component: <ShoppingCart className="h-6 w-6" />,
      reference: '<ShoppingCart />',
    },
    { name: 'Star', component: <Star className="h-6 w-6" />, reference: '<Star />' },
    { name: 'Upload', component: <Upload className="h-6 w-6" />, reference: '<Upload />' },
    { name: 'User', component: <User className="h-6 w-6" />, reference: '<User />' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative border-b border-gray-800 bg-black pb-8 pt-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-4xl font-bold text-white">Assets</h1>
          <p className="mb-6 max-w-3xl text-lg text-gray-400">
            Upload and manage icons, images, and other media assets for your design system.
          </p>
          <div className="from-blue-500 to-purple-500 h-1 w-24 bg-gradient-to-r"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Icon Library</h2>
            <p className="mb-8 text-gray-400">
              Icons help users navigate your interface and provide visual cues for actions and
              information. Click on any icon to copy its reference to your clipboard.
            </p>

            <div className="space-y-12">
              <IconGrid
                title="UI Icons"
                description="Common interface icons for actions, navigation, and indicators."
                icons={uiIcons}
              />

              <IconGrid
                title="Communication Icons"
                description="Icons related to messaging, alerts, and notifications."
                icons={communicationIcons}
              />

              <IconGrid
                title="Object Icons"
                description="Icons representing common objects and concepts."
                icons={objectIcons}
              />
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-black p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Image Assets</h2>
            <p className="mb-8 text-gray-400">
              Manage your brand images, illustrations, and other visual assets.
            </p>

            <div className="rounded-md border border-dashed border-gray-800 p-8">
              <div className="flex flex-col items-center justify-center text-center">
                <Upload className="mb-4 h-10 w-10 text-gray-500" />
                <h3 className="mb-2 text-lg font-medium text-white">Upload Images</h3>
                <p className="mb-4 text-sm text-gray-400">
                  Drag and drop image files here, or click to browse
                </p>
                <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200">
                  Browse Files
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
