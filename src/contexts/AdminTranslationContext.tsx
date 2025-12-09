import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr" | "ar";

interface Translations {
  // Sidebar Navigation
  navigation: string;
  dashboard: string;
  manageQueues: string;
  analytics: string;
  settings: string;
  myProfile: string;
  content: string;
  aboutUs: string;
  allVersions: string;
  createNew: string;
  contact: string;
  viewContact: string;
  addContact: string;
  partners: string;
  viewPartners: string;
  addPartner: string;
  terms: string;
  viewTerms: string;
  privacy: string;
  viewPolicies: string;
  categories: string;
  viewCategories: string;
  addCategory: string;
  services: string;
  viewServices: string;
  addService: string;
  professionals: string;
  viewProfessionals: string;
  addProfessional: string;
  
  // Header
  language: string;
  help: string;
  notifications: string;
  profile: string;
  signOut: string;
  signingOut: string;
  search: string;
  adminPortal: string;
  superAdmin: string;
  
  // Profile Page
  profileTitle: string;
  editProfile: string;
  updateProfileInfo: string;
  contactInformation: string;
  accountDetails: string;
  preferences: string;
  email: string;
  phone: string;
  location: string;
  accessLevel: string;
  memberSince: string;
  organization: string;
  languagePreference: string;
  timezone: string;
  theme: string;
  name: string;
  phoneNumber: string;
  save: string;
  cancel: string;
  saveChanges: string;
  loadingProfile: string;
  failedToLoadProfile: string;
  
  // Settings Page
  settingsTitle: string;
  settingsDescription: string;
  unsavedChanges: string;
  reset: string;
  general: string;
  notificationsTab: string;
  appearance: string;
  security: string;
  businessInformation: string;
  organizationDetails: string;
  businessName: string;
  contactEmail: string;
  contactPhone: string;
  businessAddress: string;
  regionalSettings: string;
  timezoneLanguage: string;
  selectTimezone: string;
  defaultLanguage: string;
  selectLanguage: string;
  dateFormat: string;
  selectFormat: string;
  timeFormat: string;
  queueConfiguration: string;
  queueBehavior: string;
  defaultQueueCapacity: string;
  avgServiceTime: string;
  autoRefreshInterval: string;
  emailNotifications: string;
  emailAlertPrefs: string;
  customerQueueUpdates: string;
  sendEmailWhenNext: string;
  dailyReports: string;
  receiveDailySummary: string;
  systemAlerts: string;
  criticalNotifications: string;
  marketingUpdates: string;
  newsAndFeatures: string;
  smsNotifications: string;
  smsAlertPrefs: string;
  queuePositionUpdates: string;
  notifyPositionChanges: string;
  turnApproaching: string;
  alertTurnComing: string;
  serviceComplete: string;
  confirmationAfterService: string;
  feedbackRequests: string;
  askForRating: string;
  inAppNotifications: string;
  dashboardNotificationPrefs: string;
  realTimeAlerts: string;
  liveQueueUpdates: string;
  desktopNotifications: string;
  showDesktopAlerts: string;
  soundAlerts: string;
  playSoundAlerts: string;
  themeMode: string;
  interfaceTheme: string;
  lightMode: string;
  darkMode: string;
  systemDefault: string;
  accentColor: string;
  primaryBrandColor: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  passwordRequirements: string;
  changePassword: string;
  twoFactorAuth: string;
  twoFactorDescription: string;
  enabled: string;
  disabled: string;
  enable2FA: string;
  disable2FA: string;
  sessionManagement: string;
  sessionDescription: string;
  currentSession: string;
  activeSince: string;
  signOutOtherSessions: string;
  settingsSaved: string;
  settingsReset: string;
  
  // Common
  loading: string;
  active: string;
  inactive: string;
  create: string;
  edit: string;
  delete: string;
  view: string;
  back: string;
  confirm: string;
  actions: string;
  status: string;
  createdAt: string;
  collapseSidebar: string;
  expandSidebar: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Sidebar Navigation
    navigation: "Navigation",
    dashboard: "Dashboard",
    manageQueues: "Manage Queues",
    analytics: "Analytics",
    settings: "Settings",
    myProfile: "My Profile",
    content: "Content",
    aboutUs: "About Us",
    allVersions: "All Versions",
    createNew: "Create New",
    contact: "Contact",
    viewContact: "View Contact",
    addContact: "Add Contact",
    partners: "Partners",
    viewPartners: "View Partners",
    addPartner: "Add Partner",
    terms: "Terms",
    viewTerms: "View Terms",
    privacy: "Privacy",
    viewPolicies: "View Policies",
    categories: "Categories",
    viewCategories: "View Categories",
    addCategory: "Add Category",
    services: "Services",
    viewServices: "View Services",
    addService: "Add Service",
    professionals: "Professionals",
    viewProfessionals: "View Professionals",
    addProfessional: "Add Professional",
    
    // Header
    language: "Language",
    help: "Help",
    notifications: "Notifications",
    profile: "Profile",
    signOut: "Sign out",
    signingOut: "Signing out...",
    search: "Search...",
    adminPortal: "Admin Portal",
    superAdmin: "Super Admin",
    
    // Profile Page
    profileTitle: "Profile",
    editProfile: "Edit Profile",
    updateProfileInfo: "Update your profile information below.",
    contactInformation: "Contact Information",
    accountDetails: "Account Details",
    preferences: "Preferences",
    email: "Email",
    phone: "Phone",
    location: "Location",
    accessLevel: "Access Level",
    memberSince: "Member Since",
    organization: "Organization",
    languagePreference: "Language",
    timezone: "Timezone",
    theme: "Theme",
    name: "Name",
    phoneNumber: "Phone Number",
    save: "Save",
    cancel: "Cancel",
    saveChanges: "Save Changes",
    loadingProfile: "Loading profile...",
    failedToLoadProfile: "Failed to load profile. Please try again later.",
    
    // Settings Page
    settingsTitle: "Settings",
    settingsDescription: "Manage your system preferences and configurations",
    unsavedChanges: "Unsaved changes",
    reset: "Reset",
    general: "General",
    notificationsTab: "Notifications",
    appearance: "Appearance",
    security: "Security",
    businessInformation: "Business Information",
    organizationDetails: "Your organization details",
    businessName: "Business Name",
    contactEmail: "Contact Email",
    contactPhone: "Contact Phone",
    businessAddress: "Business Address",
    regionalSettings: "Regional Settings",
    timezoneLanguage: "Timezone and language preferences",
    selectTimezone: "Select timezone",
    defaultLanguage: "Default Language",
    selectLanguage: "Select language",
    dateFormat: "Date Format",
    selectFormat: "Select format",
    timeFormat: "Time Format",
    queueConfiguration: "Queue Configuration",
    queueBehavior: "Customize queue behavior and defaults",
    defaultQueueCapacity: "Default Queue Capacity",
    avgServiceTime: "Avg. Service Time (minutes)",
    autoRefreshInterval: "Auto-refresh Interval (seconds)",
    emailNotifications: "Email Notifications",
    emailAlertPrefs: "Configure email alert preferences",
    customerQueueUpdates: "Customer Queue Updates",
    sendEmailWhenNext: "Send email when customer is next",
    dailyReports: "Daily Reports",
    receiveDailySummary: "Receive daily queue summary",
    systemAlerts: "System Alerts",
    criticalNotifications: "Critical system notifications",
    marketingUpdates: "Marketing Updates",
    newsAndFeatures: "News and feature updates",
    smsNotifications: "SMS Notifications",
    smsAlertPrefs: "Configure SMS alert preferences",
    queuePositionUpdates: "Queue Position Updates",
    notifyPositionChanges: "Notify when position changes",
    turnApproaching: "Turn Approaching",
    alertTurnComing: "Alert when turn is coming up",
    serviceComplete: "Service Complete",
    confirmationAfterService: "Confirmation after service",
    feedbackRequests: "Feedback Requests",
    askForRating: "Ask for rating after service",
    inAppNotifications: "In-App Notifications",
    dashboardNotificationPrefs: "Dashboard notification preferences",
    realTimeAlerts: "Real-time Alerts",
    liveQueueUpdates: "Live queue updates in dashboard",
    desktopNotifications: "Desktop Notifications",
    showDesktopAlerts: "Show browser notifications",
    soundAlerts: "Sound Alerts",
    playSoundAlerts: "Play sound for new events",
    themeMode: "Theme Mode",
    interfaceTheme: "Choose your interface theme",
    lightMode: "Light",
    darkMode: "Dark",
    systemDefault: "System",
    accentColor: "Accent Color",
    primaryBrandColor: "Choose your primary brand color",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm New Password",
    passwordRequirements: "Password must be at least 8 characters with uppercase, lowercase, and numbers",
    changePassword: "Change Password",
    twoFactorAuth: "Two-Factor Authentication",
    twoFactorDescription: "Add an extra layer of security to your account",
    enabled: "Enabled",
    disabled: "Disabled",
    enable2FA: "Enable 2FA",
    disable2FA: "Disable 2FA",
    sessionManagement: "Session Management",
    sessionDescription: "Manage your active sessions",
    currentSession: "Current Session",
    activeSince: "Active since",
    signOutOtherSessions: "Sign Out Other Sessions",
    settingsSaved: "Settings saved successfully",
    settingsReset: "Settings reset to defaults",
    
    // Common
    loading: "Loading...",
    active: "Active",
    inactive: "Inactive",
    create: "Create",
    edit: "Edit",
    delete: "Delete",
    view: "View",
    back: "Back",
    confirm: "Confirm",
    actions: "Actions",
    status: "Status",
    createdAt: "Created At",
    collapseSidebar: "Collapse sidebar",
    expandSidebar: "Expand sidebar",
  },
  fr: {
    // Sidebar Navigation
    navigation: "Navigation",
    dashboard: "Tableau de bord",
    manageQueues: "Gérer les files",
    analytics: "Analytique",
    settings: "Paramètres",
    myProfile: "Mon profil",
    content: "Contenu",
    aboutUs: "À propos",
    allVersions: "Toutes les versions",
    createNew: "Créer nouveau",
    contact: "Contact",
    viewContact: "Voir contact",
    addContact: "Ajouter contact",
    partners: "Partenaires",
    viewPartners: "Voir partenaires",
    addPartner: "Ajouter partenaire",
    terms: "Conditions",
    viewTerms: "Voir conditions",
    privacy: "Confidentialité",
    viewPolicies: "Voir politiques",
    categories: "Catégories",
    viewCategories: "Voir catégories",
    addCategory: "Ajouter catégorie",
    services: "Services",
    viewServices: "Voir services",
    addService: "Ajouter service",
    professionals: "Professionnels",
    viewProfessionals: "Voir professionnels",
    addProfessional: "Ajouter professionnel",
    
    // Header
    language: "Langue",
    help: "Aide",
    notifications: "Notifications",
    profile: "Profil",
    signOut: "Déconnexion",
    signingOut: "Déconnexion...",
    search: "Rechercher...",
    adminPortal: "Portail Admin",
    superAdmin: "Super Admin",
    
    // Profile Page
    profileTitle: "Profil",
    editProfile: "Modifier le profil",
    updateProfileInfo: "Mettez à jour vos informations de profil ci-dessous.",
    contactInformation: "Informations de contact",
    accountDetails: "Détails du compte",
    preferences: "Préférences",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    accessLevel: "Niveau d'accès",
    memberSince: "Membre depuis",
    organization: "Organisation",
    languagePreference: "Langue",
    timezone: "Fuseau horaire",
    theme: "Thème",
    name: "Nom",
    phoneNumber: "Numéro de téléphone",
    save: "Enregistrer",
    cancel: "Annuler",
    saveChanges: "Enregistrer les modifications",
    loadingProfile: "Chargement du profil...",
    failedToLoadProfile: "Échec du chargement du profil. Veuillez réessayer plus tard.",
    
    // Settings Page
    settingsTitle: "Paramètres",
    settingsDescription: "Gérez vos préférences système et configurations",
    unsavedChanges: "Modifications non enregistrées",
    reset: "Réinitialiser",
    general: "Général",
    notificationsTab: "Notifications",
    appearance: "Apparence",
    security: "Sécurité",
    businessInformation: "Informations commerciales",
    organizationDetails: "Détails de votre organisation",
    businessName: "Nom de l'entreprise",
    contactEmail: "Email de contact",
    contactPhone: "Téléphone de contact",
    businessAddress: "Adresse commerciale",
    regionalSettings: "Paramètres régionaux",
    timezoneLanguage: "Préférences de fuseau horaire et de langue",
    selectTimezone: "Sélectionner le fuseau horaire",
    defaultLanguage: "Langue par défaut",
    selectLanguage: "Sélectionner la langue",
    dateFormat: "Format de date",
    selectFormat: "Sélectionner le format",
    timeFormat: "Format de l'heure",
    queueConfiguration: "Configuration des files",
    queueBehavior: "Personnaliser le comportement des files",
    defaultQueueCapacity: "Capacité par défaut",
    avgServiceTime: "Temps de service moyen (minutes)",
    autoRefreshInterval: "Intervalle d'actualisation (secondes)",
    emailNotifications: "Notifications par email",
    emailAlertPrefs: "Configurer les préférences d'alerte email",
    customerQueueUpdates: "Mises à jour de la file client",
    sendEmailWhenNext: "Envoyer un email quand le client est suivant",
    dailyReports: "Rapports quotidiens",
    receiveDailySummary: "Recevoir le résumé quotidien",
    systemAlerts: "Alertes système",
    criticalNotifications: "Notifications système critiques",
    marketingUpdates: "Mises à jour marketing",
    newsAndFeatures: "Actualités et nouvelles fonctionnalités",
    smsNotifications: "Notifications SMS",
    smsAlertPrefs: "Configurer les préférences d'alerte SMS",
    queuePositionUpdates: "Mises à jour de position",
    notifyPositionChanges: "Notifier lors des changements de position",
    turnApproaching: "Tour approchant",
    alertTurnComing: "Alerter quand le tour approche",
    serviceComplete: "Service terminé",
    confirmationAfterService: "Confirmation après le service",
    feedbackRequests: "Demandes de feedback",
    askForRating: "Demander une évaluation après le service",
    inAppNotifications: "Notifications dans l'app",
    dashboardNotificationPrefs: "Préférences de notification du tableau de bord",
    realTimeAlerts: "Alertes en temps réel",
    liveQueueUpdates: "Mises à jour en direct des files",
    desktopNotifications: "Notifications bureau",
    showDesktopAlerts: "Afficher les notifications du navigateur",
    soundAlerts: "Alertes sonores",
    playSoundAlerts: "Jouer un son pour les nouveaux événements",
    themeMode: "Mode thème",
    interfaceTheme: "Choisissez votre thème d'interface",
    lightMode: "Clair",
    darkMode: "Sombre",
    systemDefault: "Système",
    accentColor: "Couleur d'accent",
    primaryBrandColor: "Choisissez votre couleur de marque principale",
    currentPassword: "Mot de passe actuel",
    newPassword: "Nouveau mot de passe",
    confirmPassword: "Confirmer le nouveau mot de passe",
    passwordRequirements: "Le mot de passe doit contenir au moins 8 caractères avec majuscules, minuscules et chiffres",
    changePassword: "Changer le mot de passe",
    twoFactorAuth: "Authentification à deux facteurs",
    twoFactorDescription: "Ajoutez une couche de sécurité supplémentaire à votre compte",
    enabled: "Activé",
    disabled: "Désactivé",
    enable2FA: "Activer 2FA",
    disable2FA: "Désactiver 2FA",
    sessionManagement: "Gestion des sessions",
    sessionDescription: "Gérez vos sessions actives",
    currentSession: "Session actuelle",
    activeSince: "Active depuis",
    signOutOtherSessions: "Déconnecter les autres sessions",
    settingsSaved: "Paramètres enregistrés avec succès",
    settingsReset: "Paramètres réinitialisés par défaut",
    
    // Common
    loading: "Chargement...",
    active: "Actif",
    inactive: "Inactif",
    create: "Créer",
    edit: "Modifier",
    delete: "Supprimer",
    view: "Voir",
    back: "Retour",
    confirm: "Confirmer",
    actions: "Actions",
    status: "Statut",
    createdAt: "Créé le",
    collapseSidebar: "Réduire la barre latérale",
    expandSidebar: "Développer la barre latérale",
  },
  ar: {
    // Sidebar Navigation
    navigation: "التنقل",
    dashboard: "لوحة التحكم",
    manageQueues: "إدارة الطوابير",
    analytics: "التحليلات",
    settings: "الإعدادات",
    myProfile: "ملفي الشخصي",
    content: "المحتوى",
    aboutUs: "من نحن",
    allVersions: "جميع الإصدارات",
    createNew: "إنشاء جديد",
    contact: "اتصل بنا",
    viewContact: "عرض الاتصال",
    addContact: "إضافة اتصال",
    partners: "الشركاء",
    viewPartners: "عرض الشركاء",
    addPartner: "إضافة شريك",
    terms: "الشروط",
    viewTerms: "عرض الشروط",
    privacy: "الخصوصية",
    viewPolicies: "عرض السياسات",
    categories: "الفئات",
    viewCategories: "عرض الفئات",
    addCategory: "إضافة فئة",
    services: "الخدمات",
    viewServices: "عرض الخدمات",
    addService: "إضافة خدمة",
    professionals: "المهنيون",
    viewProfessionals: "عرض المهنيين",
    addProfessional: "إضافة مهني",
    
    // Header
    language: "اللغة",
    help: "مساعدة",
    notifications: "الإشعارات",
    profile: "الملف الشخصي",
    signOut: "تسجيل الخروج",
    signingOut: "جاري الخروج...",
    search: "بحث...",
    adminPortal: "بوابة الإدارة",
    superAdmin: "مدير عام",
    
    // Profile Page
    profileTitle: "الملف الشخصي",
    editProfile: "تعديل الملف الشخصي",
    updateProfileInfo: "قم بتحديث معلومات ملفك الشخصي أدناه.",
    contactInformation: "معلومات الاتصال",
    accountDetails: "تفاصيل الحساب",
    preferences: "التفضيلات",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    accessLevel: "مستوى الوصول",
    memberSince: "عضو منذ",
    organization: "المنظمة",
    languagePreference: "اللغة",
    timezone: "المنطقة الزمنية",
    theme: "المظهر",
    name: "الاسم",
    phoneNumber: "رقم الهاتف",
    save: "حفظ",
    cancel: "إلغاء",
    saveChanges: "حفظ التغييرات",
    loadingProfile: "جاري تحميل الملف الشخصي...",
    failedToLoadProfile: "فشل في تحميل الملف الشخصي. يرجى المحاولة مرة أخرى لاحقاً.",
    
    // Settings Page
    settingsTitle: "الإعدادات",
    settingsDescription: "إدارة تفضيلات النظام والتكوينات",
    unsavedChanges: "تغييرات غير محفوظة",
    reset: "إعادة تعيين",
    general: "عام",
    notificationsTab: "الإشعارات",
    appearance: "المظهر",
    security: "الأمان",
    businessInformation: "معلومات العمل",
    organizationDetails: "تفاصيل مؤسستك",
    businessName: "اسم العمل",
    contactEmail: "البريد الإلكتروني للاتصال",
    contactPhone: "هاتف الاتصال",
    businessAddress: "عنوان العمل",
    regionalSettings: "الإعدادات الإقليمية",
    timezoneLanguage: "تفضيلات المنطقة الزمنية واللغة",
    selectTimezone: "اختر المنطقة الزمنية",
    defaultLanguage: "اللغة الافتراضية",
    selectLanguage: "اختر اللغة",
    dateFormat: "تنسيق التاريخ",
    selectFormat: "اختر التنسيق",
    timeFormat: "تنسيق الوقت",
    queueConfiguration: "تكوين الطابور",
    queueBehavior: "تخصيص سلوك الطابور والإعدادات الافتراضية",
    defaultQueueCapacity: "السعة الافتراضية للطابور",
    avgServiceTime: "متوسط وقت الخدمة (دقائق)",
    autoRefreshInterval: "فترة التحديث التلقائي (ثواني)",
    emailNotifications: "إشعارات البريد الإلكتروني",
    emailAlertPrefs: "تكوين تفضيلات تنبيه البريد الإلكتروني",
    customerQueueUpdates: "تحديثات طابور العملاء",
    sendEmailWhenNext: "إرسال بريد إلكتروني عندما يكون العميل التالي",
    dailyReports: "التقارير اليومية",
    receiveDailySummary: "استلام ملخص الطابور اليومي",
    systemAlerts: "تنبيهات النظام",
    criticalNotifications: "إشعارات النظام الحرجة",
    marketingUpdates: "تحديثات التسويق",
    newsAndFeatures: "الأخبار وتحديثات الميزات",
    smsNotifications: "إشعارات الرسائل القصيرة",
    smsAlertPrefs: "تكوين تفضيلات تنبيه الرسائل القصيرة",
    queuePositionUpdates: "تحديثات موقع الطابور",
    notifyPositionChanges: "إعلام عند تغيير الموقع",
    turnApproaching: "الدور يقترب",
    alertTurnComing: "تنبيه عندما يقترب الدور",
    serviceComplete: "اكتملت الخدمة",
    confirmationAfterService: "تأكيد بعد الخدمة",
    feedbackRequests: "طلبات التعليقات",
    askForRating: "طلب تقييم بعد الخدمة",
    inAppNotifications: "الإشعارات داخل التطبيق",
    dashboardNotificationPrefs: "تفضيلات إشعارات لوحة التحكم",
    realTimeAlerts: "تنبيهات في الوقت الفعلي",
    liveQueueUpdates: "تحديثات الطابور المباشرة في لوحة التحكم",
    desktopNotifications: "إشعارات سطح المكتب",
    showDesktopAlerts: "عرض إشعارات المتصفح",
    soundAlerts: "تنبيهات صوتية",
    playSoundAlerts: "تشغيل صوت للأحداث الجديدة",
    themeMode: "وضع المظهر",
    interfaceTheme: "اختر مظهر الواجهة",
    lightMode: "فاتح",
    darkMode: "داكن",
    systemDefault: "النظام",
    accentColor: "اللون المميز",
    primaryBrandColor: "اختر لون علامتك التجارية الأساسي",
    currentPassword: "كلمة المرور الحالية",
    newPassword: "كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور الجديدة",
    passwordRequirements: "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل مع حروف كبيرة وصغيرة وأرقام",
    changePassword: "تغيير كلمة المرور",
    twoFactorAuth: "المصادقة الثنائية",
    twoFactorDescription: "أضف طبقة أمان إضافية لحسابك",
    enabled: "مفعل",
    disabled: "معطل",
    enable2FA: "تفعيل المصادقة الثنائية",
    disable2FA: "تعطيل المصادقة الثنائية",
    sessionManagement: "إدارة الجلسات",
    sessionDescription: "إدارة جلساتك النشطة",
    currentSession: "الجلسة الحالية",
    activeSince: "نشط منذ",
    signOutOtherSessions: "تسجيل الخروج من الجلسات الأخرى",
    settingsSaved: "تم حفظ الإعدادات بنجاح",
    settingsReset: "تمت إعادة تعيين الإعدادات إلى الافتراضية",
    
    // Common
    loading: "جاري التحميل...",
    active: "نشط",
    inactive: "غير نشط",
    create: "إنشاء",
    edit: "تعديل",
    delete: "حذف",
    view: "عرض",
    back: "رجوع",
    confirm: "تأكيد",
    actions: "الإجراءات",
    status: "الحالة",
    createdAt: "تاريخ الإنشاء",
    collapseSidebar: "طي الشريط الجانبي",
    expandSidebar: "توسيع الشريط الجانبي",
  },
};

interface AdminTranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const AdminTranslationContext = createContext<AdminTranslationContextType | undefined>(undefined);

export function AdminTranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("admin-language");
    return (saved as Language) || "en";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem("admin-language", language);
    // Apply RTL to document when in admin
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    isRTL,
  };

  return (
    <AdminTranslationContext.Provider value={value}>
      {children}
    </AdminTranslationContext.Provider>
  );
}

export function useAdminTranslation() {
  const context = useContext(AdminTranslationContext);
  if (context === undefined) {
    throw new Error("useAdminTranslation must be used within an AdminTranslationProvider");
  }
  return context;
}
