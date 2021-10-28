export default (context, inject) => {
  const langData = (term) => {
    const content = {
      JoinOn: {
        en: 'Join On',
        de: 'Mach mit',
        nl: 'JoinOn',
        zh: '加入'
      },
      AirConditioningInCamper: {
        en: 'Is This Camper Have AirConditioning',
        de: 'Hat dieser Camper eine Klimaanlage?',
        nl: 'Heeft deze camper airconditioning?',
        zh: '這個露營車有空調嗎'
      },
      HeatingInCamper: {
        en: 'Is This Camper Have Heating',
        de: 'Hat dieser Camper eine Heizung?',
        nl: 'Heeft deze camper verwarming?',
        zh: '這個露營車有暖氣嗎'
      },
      NameOfCamper: {
        en: 'Name of Camper',
        de: 'Name des Camper',
        nl: 'Naam van de camper',
        zh: '露營者姓名'
      },
      BrandOfCamper: {
        en: 'Brand of Camper',
        de: 'Marke des Wohnmobils',
        nl: 'Merk camper',
        zh: '露營車品牌'
      },
      ModelOfCamper: {
        en: 'Model of Camper',
        de: 'Wohnmobilmodell',
        nl: 'Model van camper',
        zh: '露營車模型'
      },
      NumberofGearsInCamper: {
        en: 'Number of Gears In Camper',
        de: 'Anzahl der Gänge im Camper',
        nl: 'Aantal versnellingen in camper',
        zh: '露營車的檔位數量'
      },
      NumberofSeatsInCamper: {
        en: 'Number of Seats In Camper',
        de: 'Anzahl der Sitzplätze im Wohnmobil',
        nl: 'Aantal zitplaatsen in camper',
        zh: '露營車的座位數'
      },
      FirstRegistrationDate: {
        en: 'First Registration Date',
        de: 'Erster Registrierungstermin',
        nl: 'Eerste registratiedatum',
        zh: '首次註冊日期'
      },
      DisplacementOfCamper: {
        en: 'Displacement of Camper in meter',
        de: 'Hubraum des Wohnmobils in Meter',
        nl: 'Verplaatsing van Camper in meter',
        zh: '以米為單位的露營車位移'
      },
      PowerOfCamper: {
        en: 'Power of Camper',
        de: 'Kraft des Wohnmobils',
        nl: 'Kracht van Camper',
        zh: '露營者的力量'
      },
      LengthOfCamper: {
        en: 'Length of Camper in cm',
        de: 'Länge des Wohnmobils in cm',
        nl: 'Lengte camper in cm',
        zh: '露營車的長度（厘米）'
      },
      WidthOfCamper: {
        en: 'Width of Camper in cm',
        de: 'Breite des Wohnmobils in cm',
        nl: 'Breedte Camper in cm',
        zh: '露營車的寬度（厘米）'
      },
      HeightOfCamper: {
        en: 'Height of Camper in cm',
        de: 'Höhe des Wohnmobils in cm',
        nl: 'Hoogte camper in cm',
        zh: '露營車的高度（厘米）'
      },
      WeightOfCamper: {
        en: 'Weigh of Camper in kg',
        de: 'Gewicht des Wohnmobils in kg',
        nl: 'Gewicht camper in kg',
        zh: '露營車的重量（公斤）'
      },
      MileageOfCamper: {
        en: 'Mileage of Camper in km',
        de: 'Kilometerstand des Wohnmobils in km',
        nl: 'Kilometerstand van Camper in km',
        zh: '露營車的公里數'
      },
      FuelTankCapacityOfCamper: {
        en: 'Camper fuel tank capacity in liter',
        de: 'Tankinhalt des Wohnmobils in Liter',
        nl: 'Brandstoftankinhoud van Camper in liter',
        zh: '露營車油箱容量（升）'
      },
      WohnmobilHeading: {
        en: 'If you already own a motorhome, you can rent it out easily and safely via our rental platform. Your marketplace for easy and safe motorhome rental.',
        de: 'Wenn Sie bereits ein Wohnmobil besitzen, können Sie dieses einfach und sicher über unsere Vermietplattform vermieten. Ihr Marktplatz für einfache und sichere Wohnmobilvermietung.',
        nl: 'Als u al een camper heeft, kunt u deze eenvoudig en veilig verhuren via ons verhuurplatform. Uw marktplaats voor gemakkelijke en veilige camperverhuur.',
        zh: '如果您已经拥有房车，您可以通过我们的租赁平台轻松安全地出租。 您可以轻松安全地租赁房车的市场'
      },
      WohnmobilContact: {
        en: 'If you have any unanswered questions, simply contact us using our contact form.',
        de: 'Solltest du noch offene Fragen haben, kontaktiere uns einfach über unser Kontaktformular.',
        nl: 'Als je nog onbeantwoorde vragen hebt, neem dan gewoon contact met ons op via ons contactformulier.',
        zh: '如果您有任何未解决的问题，只需使用我们的联系表格与我们联系。'
      },
      WohnmobilContact1: {
        en: 'Contact us',
        de: 'Kontaktieren Sie uns',
        nl: 'Neem contact met ons op',
        zh: '联系我们'
      },
      WohnmobilHeading1: {
        en: 'Just register and get started',
        de: 'Einfach registrieren und loslegen',
        nl: 'Schrijf je in en ga aan de slag',
        zh: '只需注册并开始'
      },
      WohnmobilHeading2: {
        en: 'We guarantee for certified Partner',
        de: 'Wir garantieren für geprüfte Vermieter',
        nl: 'Wij staan ​​garant voor gecertificeerde verhuurders',
        zh: '我们保证为经过认证的房东'
      },
      WohnmobilHeading3: {
        en: 'Personal handover',
        de: 'Persönliche Übergabe',
        nl: 'Persoonlijke overdracht',
        zh: '个人交接'
      },
      WohnmobilHeading4: {
        en: 'Testimonials',
        de: 'Erfahrungsberichte',
        nl: 'Getuigenissen',
        zh: '感言'
      },
      WohnmobilHeading5: {
        en: 'Simple and secure payment',
        de: 'Einfache und sichere Bezahlung',
        nl: 'Eenvoudig en veilig betalen',
        zh: '简单安全的支付'
      },
      WohnmobilHeading6: {
        en: 'Security',
        de: 'Sicherheit',
        nl: 'Veiligheid',
        zh: '安全'
      },
      WohnmobilHeading1Text: {
        en: 'Create your ad for free in just 2 minutes',
        de: 'Erstellen Sie Ihre Anzeige kostenlos in nur 2 Minuten',
        nl: 'Maak uw advertentie gratis in slechts 2 minuten',
        zh: '只需 2 分钟即可免费制作您的广告'
      },
      WohnmobilHeading2Text: {
        en: 'Create your ad for free in just 2 minutes',
        de: 'Unser CamperGold Service Team prüft jeden Vermieter und speichert alle wichtigen Unterlagen über seinen Camper.',
        nl: 'Maak uw advertentie gratis in slechts 2 minuten',
        zh: '只需 2 分钟即可免费制作您的广告'
      },
      WohnmobilHeading3Text: {
        en: 'Our CamperGold service team checks every landlord and saves all important documents about his camper.',
        de: 'Über unsere Vermietplattform ermöglchen wir direkten persönlicher Kontakt zwischen Vermieter und Kunde.',
        nl: 'Ons CamperGold serviceteam controleert elke verhuurder en bewaart alle belangrijke documenten over zijn camper.',
        zh: '我们的 CamperGold 服务团队会检查每位房东并保存有关他的露营车的所有重要文件。'
      },
      WohnmobilHeading4Text: {
        en: 'Our tenants share their experiences with CamperGold, your marketplace for easy and safe motorhome rental, on our website. With your experience reports, you will surely answer some of your questions.',
        de: 'Unsere Mieter teilen auf unserer Seite Ihre Erfahrungen mit CamperGold, Ihr Marktplatz für einfache und sichere Wohnmobilvermietung. Mit Ihren Erfahrungsberichten beantworten Sie dir sicherlich einige deiner Fragen.',
        nl: 'Onze huurders delen hun ervaringen met CamperGold, uw marktplaats voor makkelijke en veilige camperverhuur, op onze website. Met uw ervaringsrapporten zult u zeker een aantal van uw vragen beantwoorden.',
        zh: '我们的租户在我们的网站上与 CamperGold 分享他们的经验，这是您提供轻松安全房车租赁的市场。 通过您的体验报告，您一定会回答您的一些问题。'
      },
      WohnmobilHeading5Text: {
        en: 'We offer you our payment guarantee through our CamperGold escrow service.',
        de: 'Wir bieten dir unsere Zahlungsgarantie durch unseren Treuhandservice von CamperGold.',
        nl: 'Wij bieden u onze betalingsgarantie via onze CamperGold escrow service.',
        zh: '我们通过 CamperGold 托管服务为您提供付款保证。'
      },
      WohnmobilHeading6Text: {
        en: 'In the event that something should go wrong, you have our deposit & damage coverage through our CamperGold guarantee.',
        de: 'Für den Fall das doch mal etwas schief gehen sollte, hast du unsere Kaution & Schadenabdeckung durch unsere CamperGold Garantie.',
        nl: 'Mocht er onverhoopt toch iets mis gaan, dan heeft u via onze CamperGold garantie onze borg & schadedekking.',
        zh: '如果出现问题，您可以通过我们的 CamperGold 担保获得我们的押金和损坏保险。'
      },
      Return: {
        en: 'Return',
        de: 'Rückgabe',
        nl: 'Opbrengst',
        zh: '返回'
      },
      RecommendationText: {
        en: 'Recommend camper to your friends and family',
        de: 'Empfehlen Sie den Camper Ihren Freunden und Ihrer Familie',
        nl: 'Camper aanbevelen aan vrienden en familie',
        zh: '向您的朋友和家人推荐露营车'
      },
      Recommend: {
        en: 'Recommend',
        de: 'Empfehlen',
        nl: 'Adviseren',
        zh: '推荐'
      },
      kg: {
        en: 'kg',
        de: 'Kg',
        nl: 'kg',
        zh: 'kg'
      },
      January: {
        en: 'January',
        de: 'Januar',
        nl: 'Januari',
        zh: '一月'
      },
      February: {
        en: 'February',
        de: 'Februar',
        nl: 'Februari',
        zh: '二月'
      },
      March: {
        en: 'March',
        de: 'März',
        nl: 'maart',
        zh: '行进'
      },
      April: {
        en: 'April',
        de: 'April',
        nl: 'None',
        zh: '四月'
      },
      May: {
        en: 'May',
        de: 'Mai',
        nl: 'Kunnen',
        zh: '五月'
      },
      June: {
        en: 'June',
        de: 'Juni',
        nl: 'Juni',
        zh: '六月'
      },
      July: {
        en: 'July',
        de: 'Juli',
        nl: 'Juli',
        zh: '七月'
      },
      August: {
        en: 'August',
        de: 'August',
        nl: 'Augustus',
        zh: '八月'
      },
      September: {
        en: 'September',
        de: 'September',
        nl: 'None',
        zh: '九月'
      },
      October: {
        en: 'October',
        de: 'Oktober',
        nl: 'None',
        zh: '十月'
      },
      November: {
        en: 'November',
        de: 'November',
        nl: 'November',
        zh: '十一月'
      },
      December: {
        en: 'December',
        de: 'Dezecember',
        nl: 'December',
        zh: '十二月'
      },
      AvailableBooking: {
        en: 'Available Booking',
        de: 'Buchung zur Verfügung',
        nl: 'Beschikbare boeking',
        zh: '可以预定'
      },
      OnlySaturdayToSaturday: {
        en: 'Only Saturday to Saturday',
        de: 'nur von Samstag bis Sonntag',
        nl: 'None',
        zh: '仅限周六至周六'
      },
      OnlySundayToSunday: {
        en: 'Only Sunday to Sunday',
        de: 'nur von Sonntag bis Sonntag',
        nl: 'Alleen van zaterdag tot zaterdag',
        zh: '仅限周日至周日'
      },
      Week: {
        en: 'Week',
        de: 'Woche',
        nl: 'None',
        zh: '星期'
      },
      Weeks: {
        en: 'Weeks',
        de: 'Wochen',
        nl: 'None',
        zh: '星期'
      },
      AdvanceFilter: {
        en: 'Advance Filter',
        de: 'Erweiterte Filter',
        nl: 'Geavanceerd filter',
        zh: '高级过滤器'
      },
      ClearFilter: {
        en: 'Clear Filter',
        de: 'Filter löschen',
        nl: 'Wis filter',
        zh: '清除过滤器'
      },
      PriceRange: {
        en: 'Price Range',
        de: 'Preisklasse',
        nl: 'Prijsklasse',
        zh: '价格范围'
      },
      UserDetails: {
        en: 'User Details',
        de: 'Persönliche Daten',
        nl: 'gebruikersdetails',
        zh: '用户详情'
      },
      PayFullAmount: {
        en: 'Pay Full Amount',
        de: 'vollständigen Betrag bezahlen',
        nl: 'Betaal het volledige bedrag',
        zh: '全额付款'
      },
      PayPartialAmount: {
        en: 'Pay Partial Amount',
        de: 'teilweise bezahlen',
        nl: 'Gedeeltelijk bedrag betalen',
        zh: '部分付款'
      },
      RightNowPaying: {
        en: 'Right Now Paying',
        de: 'jetzt bezahlen',
        nl: 'Op dit moment betalen',
        zh: '现在付款'
      },
      CancellationNote: {
        en: 'Cancellation Note',
        de: 'Rücktrittserklärung',
        nl: 'Annulering Opmerking',
        zh: '取消说明'
      },
      SubscribeToOurNewsletter: {
        en: 'Subscribe to our newsletter',
        de: 'Abonniere unseren Newsletter',
        nl: 'Abonneer op onze nieuwsbrief',
        zh: '订阅我们的新闻'
      },
      TotalPaid: {
        en: 'Total Paid',
        de: 'Gesamtbetrag',
        nl: 'Totaal betaald',
        zh: '总付款'
      },
      MORE: {
        en: 'MORE',
        de: 'Mehr',
        nl: 'MEER',
        zh: '更多的'
      },
      AreYouSure: {
        en: 'Are You Sure?',
        de: 'Bist du sicher?',
        nl: 'Weet je het zeker?',
        zh: '你确定吗？'
      },
      Upload: {
        en: 'Upload',
        de: 'Hochladen',
        nl: 'Uploaden',
        zh: '上传'
      },
      UploadFile: {
        en: 'Upload File',
        de: 'Datein hochzuladen',
        nl: 'Upload bestand',
        zh: '上传文件'
      },
      LoadMore: {
        en: 'Load More',
        de: 'Mehr laden',
        nl: 'Meer laden',
        zh: '装载更多'
      },
      Close: {
        en: 'Close',
        de: 'Abbrechen',
        nl: 'Dichtbij',
        zh: '关'
      },
      InvaildPrice: {
        en: 'Invalid Price',
        de: 'ungültiger Preis',
        nl: 'Ongeldige prijs',
        zh: '价格无效'
      },
      Pickup: {
        en: 'Pick-up',
        de: 'Abholen',
        nl: 'Oppakken',
        zh: '捡起'
      },
      Red: {
        en: 'Red',
        de: 'Rot',
        nl: 'rood',
        zh: '红色的'
      },
      Yellow: {
        en: 'Yellow',
        de: 'Gelb',
        nl: 'Geel',
        zh: '黄色'
      },
      Green: {
        en: 'Green',
        de: 'Grün',
        nl: 'Groente',
        zh: '绿色'
      },
      Diesel: {
        en: 'Diesel',
        de: 'Diesel',
        nl: 'Diesel',
        zh: '柴油发动机'
      },
      Petrol: {
        en: 'Petrol',
        de: 'Benzin',
        nl: 'Benzine',
        zh: '汽油'
      },
      LiquifiedPetroleumGas: {
        en: 'Liquified Petroleum Gas',
        de: 'Autogas',
        nl: 'Vloeibaar petroleumgas',
        zh: '液化石油气'
      },
      NaturalGas: {
        en: 'Natural Gas',
        de: 'Erdgas',
        nl: 'Natuurlijk gas',
        zh: '天然气'
      },
      CamperAddons: {
        en: 'Camper Addons',
        de: 'Camper Erweiterungen',
        nl: 'Camper-add-ons',
        zh: '露营插件'
      },
      Addons: {
        en: 'Addons',
        de: 'Extras',
        nl: 'Add-ons',
        zh: '附加功能'
      },
      Night: {
        en: 'Night',
        de: 'Nacht',
        nl: 'Nacht',
        zh: '夜晚'
      },
      Nights: {
        en: 'Nights',
        de: 'Nächte',
        nl: 'Nachten',
        zh: '夜晚'
      },
      Sun: {
        en: 'Sun',
        de: 'So.',
        nl: 'Zondag',
        zh: '星期日'
      },
      Mon: {
        en: 'Mon',
        de: 'Mo.',
        nl: 'Maandag',
        zh: '周一'
      },
      Tue: {
        en: 'Tue',
        de: 'Di.',
        nl: 'Dinsdag',
        zh: '周二'
      },
      Wed: {
        en: 'Wed',
        de: 'Mi.',
        nl: 'Woensdag',
        zh: '周三'
      },
      Thur: {
        en: 'Thu',
        de: 'Do.',
        nl: 'Donderdag',
        zh: '周四'
      },
      Fri: {
        en: 'Fri',
        de: 'Fr.',
        nl: 'Vrijdag',
        zh: '星期五'
      },
      Sat: {
        en: 'Sat',
        de: 'Sa.',
        nl: 'Zaterdag',
        zh: '周六'
      },
      None: {
        en: 'None',
        de: 'Keine',
        nl: 'Geen',
        zh: '没有'
      },
      ProfileImage: {
        en: 'Profile Image',
        de: 'Profilbild',
        nl: 'Profielfoto',
        zh: '个人资料图片'
      },
      FeaturedBlogPosts: {
        en: 'Featured Blog Posts',
        de: 'Empfohlene Blogbeiträge',
        nl: 'Aanbevolen blogberichten',
        zh: '精选博客文章'
      },
      NotAvailable: {
        en: 'Not Available',
        de: 'Nicht verfügbar',
        nl: 'Niet beschikbaar',
        zh: '无法使用'
      },
      AllFiledsRequired: {
        en: 'All fields are required',
        de: 'Alle Felder sind erforderlich',
        nl: 'Alle velden zijn verplicht',
        zh: '各个领域都需要'
      },
      TellWhyCancel: {
        en: 'Tell us why you want to cancel',
        de: 'Sagen Sie uns, warum Sie stornieren möchten',
        nl: 'Vertel ons waarom je wilt annuleren',
        zh: '告诉我们您为什么要取消'
      },
      BookingCancellationRequest: {
        en: 'Thanks! Your booking cancellation request is awaiting approval. You will be notified soon.',
        de: 'Vielen Dank! Ihre Buchungsstornierungsanfrage wartet auf die Genehmigung. Sie werden in Kürze benachrichtigt.',
        nl: 'Bedankt! Uw verzoek tot annulering van uw boeking wacht op goedkeuring. U krijgt binnenkort bericht.',
        zh: '谢谢！ 您的预订取消请求正在等待批准。 您将很快收到通知。'
      },
      CalcellationApprove: {
        en: 'Cancellation Approval',
        de: 'Berechnungsfreigabe',
        nl: 'Annulering Goedkeuring',
        zh: '取消批准'
      },
      Reject: {
        en: 'Reject',
        de: 'Ablehnen',
        nl: 'Afwijzen',
        zh: '拒绝'
      },
      MakeRefund: {
        en: 'Make Refund',
        de: 'Rückerstattung machen',
        nl: 'Terugbetaling doen',
        zh: '退款'
      },
      Cancel: {
        en: 'Cancel',
        de: 'Stornieren',
        nl: 'Annuleren',
        zh: '取消'
      },
      CookieMessage: {
        en: 'We use cookies to offer you a better browsing experience, personalise content and ads, to provide social media features and to analyse our traffic. Read about how we use cookies and how you can control them by clicking Cookie Settings. You consent to our cookies if you continue to use this website.',
        de: 'Wir verwenden Cookies, um Ihnen ein besseres Surferlebnis zu bieten, Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien bereitzustellen und unseren Datenverkehr zu analysieren. Lesen Sie, wie wir Cookies verwenden und wie Sie diese kontrollieren können, indem Sie auf Cookie-Einstellungen klicken. Sie stimmen unseren Cookies zu, wenn Sie diese Website weiterhin nutzen.',
        nl: 'We gebruiken cookies om u een betere browse-ervaring te bieden, inhoud en advertenties te personaliseren, functies voor sociale media te bieden en ons verkeer te analyseren. Lees hoe we cookies gebruiken en hoe u ze kunt beheren door op Cookie-instellingen te klikken. U stemt in met onze cookies als u doorgaat met het gebruiken van deze website.',
        zh: '我们使用 cookie 为您提供更好的浏览体验、个性化内容和广告、提供社交媒体功能并分析我们的流量。 了解我们如何使用 cookie 以及您如何通过单击 cookie 设置来控制它们。 如果您继续使用本网站，则表示您同意我们的 cookie。'
      },
      Available: {
        en: 'Available',
        de: 'Verfügbar',
        nl: 'Beschikbaar',
        zh: '可用'
      },
      SetSeasonalPrice: {
        en: 'Set Seasonal Price',
        de: 'Saisonpreis festlegen',
        nl: 'Seizoensprijs instellen',
        zh: '设置季节性价格'
      },
      CamperLocation: {
        en: 'Camper Location',
        de: 'Camper-Standort',
        nl: 'Camperlocatie',
        zh: '露营地点'
      },
      CamperDescription: {
        en: 'Camper Description',
        de: 'Camper Beschreibung',
        nl: 'Camperbeschrijving',
        zh: '露营车说明'
      },
      CamperBookingConditions: {
        en: 'Camper Booking Conditions',
        de: 'Buchungsbedingungen für Camper',
        nl: 'Reserveringsvoorwaarden voor campers',
        zh: '露营者预订条件'
      },
      GeneralDetails: {
        en: 'General Details',
        de: 'Allgemeine Details',
        nl: 'algemene details',
        zh: '一般详情'
      },
      ChooseCamperCategory: {
        en: 'Choose Camper Category',
        de: 'Wählen Sie die Camper-Kategorie',
        nl: 'Kies Campercategorie',
        zh: '选择露营者类别'
      },
      Next: {
        en: 'Next',
        de: 'Nächste',
        nl: 'Volgende',
        zh: '下一个'
      },
      WinterSeasonPrice: {
        en: 'Winter Season Price',
        de: 'Preis für die Nebensaison',
        nl: 'Winterseizoen prijs',
        zh: '冬季价格'
      },
      HighSeasonPrice: {
        en: 'High Season Price',
        de: 'Hauptsaisonpreis',
        nl: 'Hoogseizoenprijs',
        zh: '旺季价格'
      },
      StandardSeasonPrice: {
        en: 'Standard Season Price',
        de: 'Preis der Zwischensaison',
        nl: 'Standaard seizoensprijs',
        zh: '标准季节价格'
      },
      PricePerDay: {
        en: 'Price Per Night',
        de: 'Preis pro Nacht',
        nl: 'Prijs per nacht',
        zh: '每晚价格'
      },
      Total: {
        en: 'Total',
        de: 'Gesamt (inkl. MwST)',
        nl: 'Totaal',
        zh: '总价'
      },
      mm: {
        en: 'mm',
        de: 'mm',
        nl: 'mm',
        zh: '毫米'
      },
      cc: {
        en: 'cc',
        de: 'cc',
        nl: 'cc',
        zh: '立方圆柱'
      },
      Liter: {
        en: 'Liter',
        de: 'Liter',
        nl: 'Liter',
        zh: '公升'
      },
      KMPH: {
        en: 'KMPH',
        de: 'KMH',
        nl: 'KMPH',
        zh: '公里/小时'
      },
      MakePayment: {
        en: 'Make Payment',
        de: 'Zahlung ausführen',
        nl: 'Betaling maken',
        zh: '付款'
      },
      Back: {
        en: 'Back',
        de: 'Zurück',
        nl: 'Rug',
        zh: '后退'
      },
      CamperDetails: {
        en: 'Camper Details',
        de: 'Camper-Details',
        nl: 'Campergegevens',
        zh: '露营者详情'
      },
      PersonalDetails: {
        en: 'Personal Details',
        de: 'Persönliche Daten',
        nl: 'Persoonlijke gegevens',
        zh: '个人资料'
      },
      ReviewBookingDetails: {
        en: 'Review Booking Details',
        de: 'Buchungsdetails überprüfen',
        nl: 'Bekijk boekingsdetails',
        zh: '查看预订详情'
      },
      NovMar: {
        en: 'Nov - Mar',
        de: 'Nov - März',
        nl: 'november - maart',
        zh: '十一月至三月'
      },
      JulAug: {
        en: 'Jul - Aug',
        de: 'Juli - Augus',
        nl: 'juli - augustus',
        zh: '七月至八月'
      },
      AprJunSepOct: {
        en: 'Apr - Jun & Sep - Oct',
        de: 'April - Juni-Sept. - Okt',
        nl: 'Apr - Jun & Sep - Okt',
        zh: '四月至六月和九月至十月'
      },
      PerDay: {
        en: 'Per Night',
        de: 'Pro Nacht',
        nl: 'Per nacht',
        zh: '每晚'
      },
      Accept: {
        en: 'Accept',
        de: 'Annehmen',
        nl: 'Aanvaarden',
        zh: '接受'
      },
      Day: {
        en: 'Night',
        de: 'Nacht',
        nl: 'Nacht',
        zh: '夜晚'
      },
      WinterSeason: {
        en: 'Winter Season',
        de: 'Nebensaison',
        nl: 'Winter seizoen',
        zh: '冬季'
      },
      HighSeason: {
        en: 'High Season',
        de: 'Hauptsaison',
        nl: 'Hoogseizoen',
        zh: '高发季节'
      },
      StandardSeason: {
        en: 'Standard Season',
        de: 'Zwischensaison',
        nl: 'Standaard seizoen',
        zh: '标准季节'
      },
      NoAddonsAdded: {
        en: 'No Addons Added',
        de: 'Keine Addons hinzugefügt',
        nl: 'Geen add-ons toegevoegd',
        zh: '没有添加插件'
      },
      SeasonalPrice: {
        en: 'Seasonal Price',
        de: 'Saison preis',
        nl: 'Seizoensprijs',
        zh: '季节性价格'
      },
      Yes: {
        en: 'Yes',
        de: 'Ja',
        nl: 'Ja',
        zh: '是的'
      },
      No: {
        en: 'No',
        de: 'Nein',
        nl: 'Nee',
        zh: '不'
      },
      TooltipSlug: {
        en: 'permanent link for camper',
        de: 'permanenter Link für Camper',
        nl: 'permanente link voor camper',
        zh: '露营者的永久链接'
      },
      EndDateShouldBe: {
        en: 'End date should be greater then start date',
        de: 'Das Enddatum sollte größer als das Startdatum sein',
        nl: 'Einddatum moet groter zijn dan startdatum',
        zh: '结束日期应晚于开始日期'
      },
      InvalidPhoneNumber: {
        en: 'Invalid phone number',
        de: 'ungültige Telefonnummer',
        nl: 'Ongeldig telefoonnummer',
        zh: '无效的电话号码'
      },
      InvalidEmail: {
        en: 'Invalid email',
        de: 'ungültige E-Mail',
        nl: 'Ongeldig e-mail',
        zh: '不合规电邮'
      },
      Street: {
        en: 'Street',
        de: 'Straße',
        nl: 'Straat',
        zh: '街道'
      },
      Required: {
        en: 'Required',
        de: 'Erforderlich',
        nl: 'Vereist',
        zh: '必需的'
      },
      NoDataFound: {
        en: 'No data found',
        de: 'Keine Daten gefunden',
        nl: 'Geen data gevonden',
        zh: '没有找到数据'
      },
      LearnMore: {
        en: 'Learn More',
        de: 'Erfahren Sie mehr',
        nl: 'Leer meer',
        zh: '了解更多'
      },
      ConfirmPasswordValid: {
        en: 'Password not match',
        de: 'Passwort stimmt nicht überein',
        nl: 'Wachtwoord komt niet overeen',
        zh: '密码不匹配'
      },
      PasswordValid: {
        en: 'Min 8 characters, at least 1 uppercase, 1 lowercase and 1 number',
        de: 'Mindestens 8 Zeichen, mindestens 1 Großbuchstabe, 1 Kleinbuchstabe und 1 Zahl',
        nl: 'Min 8 karakters, minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer',
        zh: '最少 8 个字符，至少 1 个大写字母、1 个小写字母和 1 个数字'
      },
      Partners: {
        en: 'Partners',
        de: 'Vermieter',
        nl: 'Partners',
        zh: '伙伴'
      },
      Customers: {
        en: 'Customers',
        de: 'Kunden',
        nl: 'Klanten',
        zh: '顾客'
      },
      BlogPosts: {
        en: 'Blog Posts',
        de: 'Blogeinträge',
        nl: 'Blog berichten',
        zh: '博客文章'
      },
      TotalAmount: {
        en: 'Total Amount',
        de: 'Gesamtsumme',
        nl: 'Totale hoeveelheid',
        zh: '总价'
      },
      TodayBooking: {
        en: 'Today Booking',
        de: 'Heute Buchung',
        nl: 'Vandaag Boeking',
        zh: '今天预订'
      },
      Booking: {
        en: 'Booking',
        de: 'Buchung',
        nl: 'Boeking',
        zh: '预订'
      },
      VehicleDetails: {
        en: 'Vehicle Details',
        de: 'Fahrzeugangaben',
        nl: 'Voertuig details',
        zh: '车辆详情'
      },
      General: {
        en: 'General',
        de: 'Allgemeines',
        nl: 'Algemeen',
        zh: '一般'
      },
      TransactionId: {
        en: 'Transaction Id',
        de: 'Transaktions-ID',
        nl: 'Transactie ID',
        zh: '交易编号'
      },
      CouponCode: {
        en: 'Coupon Code',
        de: 'Gutscheincode',
        nl: 'Coupon Code',
        zh: '优惠卷号码'
      },
      BookingDates: {
        en: 'Booking Dates',
        de: 'Buchungsdatum',
        nl: 'Boekingsdata',
        zh: '预订日期'
      },
      BookingCreated: {
        en: 'Booking Created',
        de: 'Buchung erstellt',
        nl: 'Boeking aangemaakt',
        zh: '已创建预订'
      },
      Confirmed: {
        en: 'Confirmed',
        de: 'Bestätigt',
        nl: 'Bevestigd',
        zh: '确认的'
      },
      BookingStatus: {
        en: 'Booking Status',
        de: 'Buchungsstatus',
        nl: 'Boekingsstatus',
        zh: '预订状态'
      },
      Status: {
        en: 'Status',
        de: 'Status',
        nl: 'Toestand',
        zh: '地位'
      },
      Withdrawal: {
        en: 'Withdrawal',
        de: 'Rückzug',
        nl: 'Opname',
        zh: '退出'
      },
      BookingDetails: {
        en: 'Booking Details',
        de: 'Buchungsdetails',
        nl: 'Boekingsdetails',
        zh: '预订详情'
      },
      ViewBookingDetails: {
        en: 'View Booking Details',
        de: 'Buchungsdetails anzeigen',
        nl: 'Bekijk boekingsdetails',
        zh: '查看预订详情'
      },
      To: {
        en: 'to',
        de: 'bis',
        nl: 'tot',
        zh: '至'
      },
      From: {
        en: 'from',
        de: 'von',
        nl: 'van',
        zh: '从'
      },
      NewPassword: {
        en: 'New Password',
        de: 'Neues Passwort',
        nl: 'Nieuw paswoord',
        zh: '新密码'
      },
      CurrentPassword: {
        en: 'Current Password',
        de: 'Jetziges Passwort',
        nl: 'huidig wachtwoord',
        zh: '当前密码'
      },
      EditorInCharge: {
        en: 'Editor in Charge',
        de: 'Verantwortlicher Redakteur',
        nl: 'Verantwoordelijke redacteur',
        zh: '主编'
      },
      RepresentedBy: {
        en: 'Represented by',
        de: 'Vertreten durch',
        nl: 'Vertegenwoordigd door',
        zh: '代表人'
      },
      InformationAccordingTo: {
        en: 'Information according to',
        de: 'Angaben nach',
        nl: 'Informatie volgens',
        zh: '信息根据'
      },
      FAQ: {
        en: 'FAQ',
        de: 'FAQ',
        nl: 'FAQ',
        zh: 'FAQ'
      },
      YourBookingIsSuccessful: {
        en: 'Your booking is successful',
        de: 'Ihre Buchung ist erfolgreich',
        nl: 'Uw boeking is gelukt',
        zh: '您的预订成功'
      },
      PleaseFillCompleteDetails: {
        en: 'Please fill complete details',
        de: 'Bitte geben Sie die vollständigen Details ein',
        nl: 'Gelieve volledige details in te vullen',
        zh: '请填写完整的详细信息'
      },
      Loading: {
        en: 'Loading',
        de: 'Wird geladen',
        nl: 'Bezig met laden',
        zh: '加载中'
      },
      InvalidCouponCode: {
        en: 'Invalid Coupon Code',
        de: 'Ungültiger Gutscheincode',
        nl: 'Ongeldige couponcode',
        zh: '无效的优惠券代码'
      },
      CouponCodeApplied: {
        en: 'Coupon Code Applied',
        de: 'Gutscheincode angewendet',
        nl: 'Kortingscode toegepast',
        zh: '已应用优惠券代码'
      },
      CityNotFound: {
        en: 'City not found',
        de: 'Stadt nicht gefunden',
        nl: 'Stad niet gevonden',
        zh: '未找到城市'
      },
      Additional: {
        en: 'Additional',
        de: 'Zusätzlich',
        nl: 'Aanvullend',
        zh: '额外的'
      },
      SubmitYourInquiry: {
        en: 'Submit your Inquiry',
        de: 'Senden Sie Ihre Anfrage',
        nl: 'Dien uw aanvraag in',
        zh: '提交您的询问'
      },
      Pages: {
        en: 'Pages',
        de: 'Seiten',
        nl: 'Paginas',
        zh: '页面'
      },
      Copyright: {
        en: 'Copyright',
        de: 'Copyright',
        nl: 'auteursrechten',
        zh: '版权'
      },
      Inquiry: {
        en: 'Inquiry',
        de: 'Senden Sie Ihre Anfrage',
        nl: 'Navraag',
        zh: '询问'
      },
      ReadLess: {
        en: 'Read Less',
        de: 'Lese weniger',
        nl: 'Lees minder',
        zh: '少讀'
      },
      ReadMore: {
        en: 'Read More',
        de: 'WEITERLESEN',
        nl: 'Lees verder',
        zh: '阅读更多'
      },
      AlreadyRegistered: {
        en: 'Already Registered',
        de: 'Bereits registriert',
        nl: 'Al geregistreerd',
        zh: '已经登记了'
      },
      PartnerRegistration: {
        en: 'Partner Registration',
        de: 'Partner Registrierung',
        nl: 'Partnerregistratie',
        zh: '合作伙伴注册'
      },
      Password: {
        en: 'Password',
        de: 'Passwort ',
        nl: 'Wachtwoord',
        zh: '密码'
      },
      ConfirmPassword: {
        en: 'Confirm Password',
        de: 'Passwort bestätigen',
        nl: 'bevestig wachtwoord',
        zh: '确认密码'
      },
      Submit: {
        en: 'Submit',
        de: 'einreichen',
        nl: 'Indienen',
        zh: '提交'
      },
      ResetYourPassword: {
        en: 'Reset your password',
        de: 'Passwort zurücksetzen',
        nl: 'Stel je wachtwoord opnieuw in',
        zh: '重置您的密码'
      },
      Register: {
        en: 'Register ',
        de: 'Registrieren',
        nl: 'Register',
        zh: '登记 '
      },
      ForgotPassword: {
        en: 'Forgot Password',
        de: 'Passwort vergessen',
        nl: 'Wachtwoord vergeten',
        zh: '忘记密码'
      },
      WelcomeBack: {
        en: 'Welcome Back',
        de: 'Willkommen zurück',
        nl: 'Welkom terug',
        zh: '欢迎回来'
      },
      SelectDate: {
        en: 'Select Date',
        de: 'Datum auswählen',
        nl: 'Selecteer een datum',
        zh: '选择日期'
      },
      Select: {
        en: 'Select',
        de: 'Wählen',
        nl: 'Selecteer',
        zh: '选择'
      },
      ChooseCity: {
        en: 'Choose City',
        de: 'wo möchtest du starten',
        nl: 'Kies Stad',
        zh: '选择城市'
      },
      EditProfile: {
        en: 'Edit Profile',
        de: 'Profil bearbeiten',
        nl: 'Bewerk profiel',
        zh: '编辑个人资料'
      },
      ViewAllPost: {
        en: 'View All Post',
        de: 'Alle Beiträge anzeigen',
        nl: 'Bekijk alle berichten',
        zh: '查看所有帖子'
      },
      BecomePartner: {
        en: 'Become Partner',
        de: 'Vermieter',
        nl: 'Partner worden',
        zh: '成为合作伙伴'
      },
      ApplyCouponCode: {
        en: 'Apply Coupon Code',
        de: 'Coupon anwenden',
        nl: 'Kortingscode toepassen',
        zh: '应用优惠券代码'
      },
      Continue: {
        en: 'Continue',
        de: 'Weiter',
        nl: 'Doorgaan met',
        zh: '继续'
      },
      Discount: {
        en: 'Discount',
        de: 'Rabatt',
        nl: 'Korting',
        zh: '折扣'
      },
      Subtotal: {
        en: 'Subtotal',
        de: 'Zwischensumme',
        nl: 'Subtotaal',
        zh: '小计'
      },
      Address: {
        en: 'Address',
        de: 'Adresse',
        nl: 'Adres',
        zh: '小计'
      },
      Email: {
        en: 'Email',
        de: 'E-mail',
        nl: 'E-mail',
        zh: '电子邮件'
      },
      Phone: {
        en: 'Phone',
        de: 'Telefon',
        nl: 'Telefoon',
        zh: '电话'
      },
      LastName: {
        en: 'Last Name',
        de: 'Nachname',
        nl: 'Achternaam',
        zh: '姓氏'
      },
      FirstName: {
        en: 'First Name',
        de: 'Vorname',
        nl: 'Voornaam',
        zh: '名字'
      },
      SearchNow: {
        en: 'Search Now',
        de: 'Jetzt suchen',
        nl: 'Zoek nu',
        zh: '马上搜索'
      },
      BookNow: {
        en: 'Book Now',
        de: 'buchen Sie jetzt',
        nl: 'Book Now',
        zh: '现在预订'
      },
      Conditions: {
        en: 'Conditions',
        de: 'Bedingungen',
        nl: 'Conditie',
        zh: '状况'
      },
      CamperSpecifications: {
        en: 'Camper Specifications',
        de: 'Camper Spezifikationen',
        nl: 'Camperspecificaties',
        zh: '露营车规格'
      },
      AboutCamper: {
        en: 'About Camper',
        de: 'Über Camper',
        nl: 'Over Camper',
        zh: '关于露营者'
      },
      Collapse: {
        en: 'Collapse',
        de: 'Kollaps',
        nl: 'Instorten',
        zh: '坍塌'
      },
      MyProfile: {
        en: 'My Profile',
        de: 'Mein Profil',
        nl: 'Mijn profiel',
        zh: '我的简历'
      },
      Dashboard: {
        en: 'Dashboard',
        de: 'Dashboard',
        nl: 'Dashboard',
        zh: '仪表板'
      },
      ContactUs: {
        en: 'Contact Us',
        de: 'Kontakt',
        nl: 'Neem contact met ons op',
        zh: '联系我们'
      },
      Review: {
        en: 'Review',
        de: 'Rezension',
        nl: 'Recensie',
        zh: '审查'
      },
      Contact: {
        en: 'Contact',
        de: 'Kontakt',
        nl: 'Contact',
        zh: '接触'
      },
      HireACamper: {
        en: 'Hire a Camper',
        de: 'Camper Mieten',
        nl: 'Huur een camper',
        zh: '雇用露营者'
      },
      AboutUs: {
        en: 'About Us',
        de: 'über uns',
        nl: 'Over ons',
        zh: '关于我们'
      },
      Home: {
        en: 'Home',
        de: 'Home',
        nl: 'Thuis',
        zh: '家'
      },
      Logout: {
        en: 'Logout',
        de: 'Ausloggen',
        nl: 'Uitloggen',
        zh: '登出'
      },
      Login: {
        en: 'Login',
        de: 'Anmeldung',
        nl: 'Log in',
        zh: '登录'
      },
      ChangePassword: {
        en: 'Change Password',
        de: 'Passwort ändern',
        nl: 'Wijzig wachtwoord',
        zh: '更改密码'
      },
      Tour: {
        en: 'Tour',
        de: 'Reise',
        nl: 'Tour',
        zh: '旅游'
      },
      City: {
        en: 'City',
        de: 'Stadt',
        nl: 'Stad',
        zh: '城市'
      },
      Edit: {
        en: 'Edit',
        de: 'bearbeiten',
        nl: 'Bewerking',
        zh: '编辑'
      },
      Description: {
        en: 'Description',
        de: 'Beschreibung',
        nl: 'Beschrijving',
        zh: '描述'
      },
      Add: {
        en: 'Add',
        de: 'Hinzufügen',
        nl: 'Toevoegen',
        zh: '添加'
      },
      Brand: {
        en: 'Brand',
        de: 'Marke',
        nl: 'Merk',
        zh: '品牌'
      },
      Name: {
        en: 'Name',
        de: 'Name',
        nl: 'Naam',
        zh: '名称'
      },
      Users: {
        en: 'Users',
        de: 'Benutzer',
        nl: 'Users',
        zh: '用户'
      },
      User: {
        en: 'User',
        de: 'Benutzer',
        nl: 'Gebruiker',
        zh: '用户'
      },
      CamperType: {
        en: 'Campers Type',
        de: 'Camper Typ',
        nl: 'Type camper',
        zh: '露营车类型'
      },
      Type: {
        en: 'Type',
        de: 'Typ',
        nl: 'Type',
        zh: '类型'
      },
      Options: {
        en: 'Options',
        de: 'Optionen',
        nl: 'Opties',
        zh: '选项'
      },
      Post: {
        en: 'Post',
        de: 'Post',
        nl: 'Na',
        zh: '博客'
      },
      Page: {
        en: 'Page',
        de: 'Seite',
        nl: 'Bladzijde',
        zh: '页'
      },
      BlogCategory: {
        en: 'Blog Category',
        de: 'Blog-Kategorie',
        nl: 'Blogcategorie',
        zh: '博客类别'
      },
      Campers: {
        en: 'Campers',
        de: 'Camper',
        nl: 'Campers',
        zh: '露营者'
      },
      CamperZubehor: {
        en: 'Camper Accessories',
        de: 'Camper Zubehör',
        nl: 'Camperaccessoires',
        zh: '露营车配件'
      },
      CamperList: {
        en: 'All Camper',
        de: 'Alle Camper',
        nl: 'Alle camper',
        zh: '所有露营车'
      },
      AddCamper: {
        en: 'Add Camper',
        de: 'Camper hinzufügen',
        nl: 'Camper toevoegen',
        zh: '添加露营车'
      },
      EditCamper: {
        en: 'Edit Camper',
        de: 'Camper bearbeiten',
        nl: 'Camper bewerken',
        zh: '编辑露营车'
      },
      Coupon: {
        en: 'Coupon',
        de: 'Gutschein',
        nl: 'Coupon',
        zh: '常问问题'
      },
      CoupenCode: {
        en: 'Coupon Code',
        de: 'Gutscheincode',
        nl: 'Coupon Code',
        zh: '优惠卷号码'
      },
      CoupenPrice: {
        en: 'Coupon Price',
        de: 'Couponpreis',
        nl: 'Couponprijs',
        zh: '优惠券价格'
      },
      CoupenType: {
        en: 'Coupon Type',
        de: 'Coupontyp',
        nl: 'Coupontype',
        zh: '优惠券类型'
      },
      Date: {
        en: 'Date',
        de: 'Datum',
        nl: 'Datum',
        zh: '日期'
      },
      Startdate: {
        en: 'Start date',
        de: 'Startzeit',
        nl: 'Begin datum',
        zh: '开始日期'
      },
      Enddate: {
        en: 'End date',
        de: 'Endzeit',
        nl: 'Einddatum',
        zh: '结束日期'
      },
      AddCoupon: {
        en: 'Add Coupon',
        de: 'Gutschein hinzufügen',
        nl: 'Coupon toevoegen',
        zh: '添加优惠券'
      },
      AddFaq: {
        en: 'Add Faq',
        de: 'Faq Hinzufügen',
        nl: 'Faq toevoegen',
        zh: '添加常见问题'
      },
      ViewAll: {
        en: 'View All',
        de: 'Alle ansehen',
        nl: 'Bekijk alles',
        zh: '查看全部'
      },
      Question: {
        en: 'Question',
        de: 'Frage',
        nl: 'Vraag',
        zh: '问题'
      },
      Category: {
        en: 'Category',
        de: 'Kategorie',
        nl: 'Categorie',
        zh: '类别'
      },
      FaqCategory: {
        en: 'Faq Category',
        de: 'FAQ-Kategorie',
        nl: 'Faq Categorie',
        zh: '常见问题分类'
      },
      Model: {
        en: 'Model',
        de: 'Modell',
        nl: 'Model',
        zh: '模型'
      },
      FuelType: {
        en: 'Fuel Type',
        de: 'Benzintyp',
        nl: 'Brandstoftype',
        zh: '汽油种类'
      },
      EnvironmentalBandge: {
        en: 'Environmental Bandge',
        de: 'Umweltplakette',
        nl: 'Omgevingsverband',
        zh: '环保绷带'
      },
      AirConditioning: {
        en: 'Air Conditioning',
        de: 'Klimaanlage',
        nl: 'Airconditioning',
        zh: '空调'
      },
      Heating: {
        en: 'Heating',
        de: 'Heizung',
        nl: 'Verwarming',
        zh: '加热'
      },
      DrivingLicense: {
        en: 'Driving License',
        de: 'Führerschein',
        nl: 'Rijbewijs',
        zh: '驾驶执照'
      },
      SmokingAllowed: {
        en: 'Smoking allowed',
        de: 'Rauchen',
        nl: 'Roken toegestaan',
        zh: '允许吸烟'
      },
      Years: {
        en: 'Years',
        de: 'Jahre',
        nl: 'jaren',
        zh: '年'
      },
      Smoking: {
        en: 'Smoking allowed',
        de: 'Rauchen',
        nl: 'Roken toegestaan',
        zh: '允许吸烟'
      },
      AnimalsAllowed: {
        en: 'Animals allowed',
        de: 'Tiere erlaubt',
        nl: 'Dieren toegestaan',
        zh: '允许动物'
      },
      Insurance: {
        en: 'Insurance',
        de: 'Versicherung',
        nl: 'Verzekering',
        zh: '保险'
      },
      Title: {
        en: 'Title',
        de: 'Titel',
        nl: 'Titel',
        zh: '标题'
      },
      MetaTitle: {
        en: 'Meta Title',
        de: 'Meta-Titel',
        nl: 'Metatitel',
        zh: '元标题'
      },
      MetaDescription: {
        en: 'Meta Description',
        de: 'Meta-Beschreibung',
        nl: 'Meta omschrijving',
        zh: '元描述'
      },
      Age: {
        en: 'Age',
        de: 'Alter',
        nl: 'Leeftijd',
        zh: '年龄'
      },
      Favorite: {
        en: 'Wishlist',
        de: 'in der Wunschliste',
        nl: 'Verlanglijst',
        zh: '愿望清单'
      },
      BookingDetailsTitle: {
        en: 'Booking Details',
        de: 'Ihre Buchung',
        nl: 'Boekingsdetails',
        zh: '预订详情'
      },
      AddonsHeading: {
        en: 'Additional equipment for your camping holiday',
        de: 'Zusatz Equipment für deinen Campingurlaub',
        nl: 'Extra uitrusting voor uw kampeervakantie',
        zh: '露营假期的附加设备'
      },
      AddToFavorite: {
        en: 'Add To Wishlist',
        de: 'zur Wunschliste',
        nl: 'Voeg toe aan verlanglijst',
        zh: '添加到愿望清单'
      },
      MinimumAge: {
        en: 'Minimum Age',
        de: 'Mindestalter Fahrer',
        nl: 'Minimum leeftijd',
        zh: '最低年龄'
      },
      NumberofGears: {
        en: 'Number of gears',
        de: 'Anzahl der Gänge',
        nl: 'Aantal versnellingen',
        zh: '齿轮数'
      },
      Gears: {
        en: 'Gears',
        de: 'Gänge',
        nl: 'Versnellingen',
        zh: '齿轮数'
      },
      NumberofSeats: {
        en: 'Number of seats',
        de: 'Anzahl der Sitzplätze',
        nl: 'aantal zitplaatsen',
        zh: '座位数量'
      },
      Seat: {
        en: 'Seats',
        de: 'Sitze',
        nl: 'Stoelen',
        zh: '座位'
      },
      Bed: {
        en: 'Bed',
        de: 'Bett',
        nl: 'Bed',
        zh: '床'
      },
      Displacement: {
        en: 'Transmission',
        de: 'Getriebe',
        nl: 'Overdragen',
        zh: '传送'
      },
      Power: {
        en: 'Battery',
        de: 'Batterie',
        nl: 'Accu',
        zh: '电池'
      },
      Length: {
        en: 'Length',
        de: 'Länge',
        nl: 'Lengte',
        zh: '长度'
      },
      Width: {
        en: 'Width',
        de: 'Breite',
        nl: 'Breedte',
        zh: '宽度'
      },
      Height: {
        en: 'Height',
        de: 'Höhe',
        nl: 'Hoogte',
        zh: '高度'
      },
      Weight: {
        en: 'Weight',
        de: 'zul. Gesamtgewicht',
        nl: 'Gewicht',
        zh: '重量'
      },
      Mileage: {
        en: 'Mileage',
        de: 'Kilometerstand',
        nl: 'Kilometerstand',
        zh: '里程'
      },
      FuelTankCapacity: {
        en: 'Fuel tank capacity',
        de: 'Tank Volumen',
        nl: 'Brandstof tank capaciteit',
        zh: '油箱容量'
      },
      FirstRegistration: {
        en: 'First registration',
        de: 'Erstzulassung',
        nl: 'Eerste registratie',
        zh: '首次注册'
      },
      Location: {
        en: 'Location',
        de: 'Ort',
        nl: 'Plaats',
        zh: '地点'
      },
      Postcode: {
        en: 'Postcode',
        de: 'Postleitzahl',
        nl: 'postcode',
        zh: '邮政编码'
      },
      Place: {
        en: 'Place',
        de: 'Platz',
        nl: 'Plaats',
        zh: '地方'
      },
      Lat: {
        en: 'Lat',
        de: 'Breite',
        nl: 'Breedtegraad',
        zh: '纬度'
      },
      EnableSeasonalPrice: {
        en: 'Enable Seasonal Price',
        de: 'Saisonpreis aktivieren',
        nl: 'Seizoensprijs inschakelen',
        zh: '启用季节性价格'
      },
      NoCamperAvailable: {
        en: 'No Camper Available',
        de: 'Kein Wohnmobil verfügbar',
        nl: 'Geen camper beschikbaar',
        zh: '没有露营车'
      },
      Long: {
        en: 'Long',
        de: 'Längengrad',
        nl: 'Lengtegraad',
        zh: '经度'
      },
      Country: {
        en: 'Country',
        de: 'Land',
        nl: 'Land',
        zh: '国家'
      },
      Price: {
        en: 'Price',
        de: 'Preis',
        nl: 'Prijs',
        zh: '金额'
      },
      FURNISHING: {
        en: 'Furnishing',
        de: 'Möblierung',
        nl: 'Inrichting',
        zh: '陈设'
      },
      Slug: {
        en: 'slug',
        de: 'slug',
        nl: 'naaktslak',
        zh: '蛞蝓'
      },
      TopCities: {
        en: 'Top Cities',
        de: 'Top-Städte',
        nl: 'Topsteden',
        zh: '热门城市'
      },
      QuickLinks: {
        en: 'Quick Links',
        de: 'Schnelllinks',
        nl: 'Snelle links',
        zh: '快速链接'
      },
      Frankfurt: {
        en: 'Frankfurt',
        de: 'Frankfurt',
        nl: 'Frankfurt',
        zh: '法兰克福'
      },
      AGB: {
        en: 'Terms & Conditions',
        de: 'AGB',
        nl: 'algemene voorwaarden',
        zh: '状况'
      },
      Service: {
        en: 'Service',
        de: 'Service',
        nl: 'Dienst',
        zh: '服务'
      },
      DataProtection: {
        en: 'Data Protection',
        de: 'Datenschutz',
        nl: 'Gegevensbescherming',
        zh: '数据保护'
      },
      Munchen: {
        en: 'Munich',
        de: 'München',
        nl: 'München',
        zh: '慕尼黑'
      },
      Berlin: {
        en: 'Berlin',
        de: 'Berlin',
        nl: 'Berlijn',
        zh: '柏林'
      },
      Hamburg: {
        en: 'Hamburg',
        de: 'Hamburg',
        nl: 'Hamburg',
        zh: '汉堡'
      },
      Content: {
        en: 'Content',
        de: 'Inhalt',
        nl: 'Inhoud',
        zh: '网站内容'
      },
      FeaturedImage: {
        en: 'Featured Image',
        de: 'Featured Bild',
        nl: 'Uitgelichte afbeelding',
        zh: '特色图片'
      },
      ImageGallery: {
        en: 'Gallery',
        de: 'Galerie',
        nl: 'Galerij',
        zh: '画廊'
      },
      Gallery: {
        en: 'Gallery',
        de: 'Galerie',
        nl: 'Galerij',
        zh: '画廊'
      },
      CoverHeading: {
        en: 'Rent a camper of your choice',
        de: 'Miete einen Camper deiner Wahl',
        nl: 'Huur een camper naar keuze',
        zh: '租一辆您选择的露营车'
      },
      RentACamper: {
        en: 'Rent a camper',
        de: 'Wohnmobil mieten',
        nl: 'Huur een camper',
        zh: '租一辆露营车'
      },
      FindCamperType: {
        en: 'Find your camper type',
        de: 'Finde deinen Campertyp',
        nl: 'Vind uw campertype',
        zh: '找到您的露营者类型'
      },
      CamperGoldoffer: {
        en: 'Our Camper Gold offer',
        de: 'Unser CamperGold Angebot',
        nl: 'Onze Camper Gold aanbieding',
        zh: '我们的 Camper Gold 优惠'
      },
      CamperGoldTours: {
        en: 'Camper Gold Tours',
        de: 'Camper Gold Tours',
        nl: 'Camper GoldTours',
        zh: 'Camper Gold 旅游'
      },
      RentCamper: {
        en: 'RENT YOUR CAMPER - HOW DOES IT WORK?',
        de: 'VERMIETE DEINEN CAMPER - WIE FUNKTIONIERT DAS?',
        nl: 'HUUR UW CAMPER - HOE WERKT HET?',
        zh: '租你的露营车 - 它是如何运作的？'
      },
      RentCamperContentp1: {
        en: 'Do you already have a camper with whom you go on vacation for a few weeks every year? The rest of the time your camper is in the garage and there are high maintenance costs that you would like to reduce? CamperGold offers you the opportunity to rent out your motorhome safely and easily. In this way, you can reduce your downtime and improve your vacation budget at the same time. We will of course help you to find the right renter for your motorhome.',
        de: 'Du besitzt bereits ein Camper mit den du jedes Jahr ein paar Wochen in den Urlaub fährst? Die restliche Zeit steht dein Camper in der Garage und es fallen hohe Haltungkosten an, die du gerne reduzieren möchtest? CamperGold bietet Dir die Möglichkeit, dein Wohnmobil sicher und einfach zu vermieten. So kannst du gleichzeitig deine Standzeiten mindern und dein Urlaubsbudget aufbessern. Wir helfen dir natürlich, den richtigen Mieter für dein Wohnmobil zu finden.',
        nl: 'Heb je al een camper waarmee je jaarlijks een paar weken op vakantie gaat? De rest van de tijd staat uw camper in de garage en zijn er hoge onderhoudskosten die u graag wilt verlagen? CamperGold biedt u de mogelijkheid om uw camper veilig en gemakkelijk te verhuren. Op deze manier kunt u uw uitvaltijd verminderen en tegelijkertijd uw vakantiebudget verbeteren. Uiteraard helpen wij u bij het vinden van de juiste huurder voor uw camper.',
        zh: '您是否已经有一个露营者，您每年都会和他一起度假几周？ 其余时间您的露营车都在车库里，您想降低高昂的维护成本吗？ CamperGold 为您提供安全、轻松地出租房车的机会。 通过这种方式，您可以减少停机时间并同时改善您的假期预算。 我们当然会帮助您为您的房车找到合适的承租人。'
      },
      RentCamperContentp2: {
        en: 'You can rent out your camper via Campergold in just a few steps: Create your own CamperGold profile and set your rental price and availability. You can then receive booking inquiries directly. The rental inquiries for your camper are initially non-binding. You can get to know your potential tenants beforehand before they sign a rental agreement. If you have a good feeling, you send the tenant a binding offer and off you go.',
        de: 'So kannst du deinen Camper über Campergold in nur wenigen Schritten vermieten: Erstelle dein eigenes CamperGold Profil und lege deinen Mietpreis und die Verfügbarkeit fest. Im Anschluss kannst du direkt Buchungsanfragen empfangen. Die Mietanfragen für dein Camper sind zunächst unverbindlich. Du kannst deine potenziellen Mieter vorher kennenlernen, ehe Sie einen Mietvertrag unterschreiben. Wenn Du ein gutes Gefühl hast, sendest du dem Mieter ein verbindliches Angebot und es kann los gehen.',
        nl: 'Via Campergold verhuurt u in slechts enkele stappen uw camper: Maak uw eigen CamperGold-profiel aan en bepaal uw huurprijs en beschikbaarheid. U kunt dan direct boekingsaanvragen ontvangen. De huuraanvragen voor uw camper zijn in eerste instantie vrijblijvend. U kunt uw potentiële huurders vooraf leren kennen voordat zij een huurovereenkomst ondertekenen. Als je er een goed gevoel bij hebt, stuur je de huurder een bindend bod en ga je aan de slag.',
        zh: '您只需几个步骤即可通过 Campergold 出租您的露营车：创建您自己的 CamperGold 个人资料并设置您的租赁价格和可用性。 然后，您可以直接收到预订查询。 您的露营车的租赁查询最初不具有约束力。 您可以在潜在租户签署租赁协议之前提前了解他们。 如果您感觉良好，您可以向租户发送具有约束力的报价，然后您就可以离开了。'
      },
      RentCamperContentp3: {
        en: 'You dont have to worry about the safety of your camper when you rent your camper through CamperGold. When renting out via CamperGold, your motorhome automatically has insurance with liability, full and partial coverage.',
        de: 'Um die Sicherheit deines Campers musst du dir keine Gedanken machen, wenn du dein Camper über CamperGold vermietest. Während der Vermietung über CamperGold, hat dein Wohnmobil automatisch eine Versicherung mit Haftpflicht-, Voll- und Teilkaskoschutz.',
        nl: 'U hoeft zich geen zorgen te maken over de veiligheid van uw camper wanneer u uw camper huurt via CamperGold. Bij verhuur via CamperGold is uw camper automatisch verzekerd met aansprakelijkheid, volledige en gedeeltelijke dekking.',
        zh: '通过 CamperGold 租赁露营车时，您无需担心露营车的安全。 通过 CamperGold 出租时，您的房车自动拥有责任险、全险和部分险。'
      },
      Locations: {
        en: 'Locations',
        de: 'Standorte',
        nl: 'Locaties',
        zh: '地点'
      },
      FindCampeInArea: {
        en: 'Find a camper in your area',
        de: 'Finde einen Camper in deiner Umgebung',
        nl: 'Vind een camper bij jou in de buurt',
        zh: '寻找您所在地区的露营者'
      },
      JoinTravelHeading: {
        en: 'Join our travel community and share your experiences and vacation reports',
        de: 'Treten Sie unserer Reise-Community bei und teilen Sie Ihre Erfahrungen und Urlaubsberichte',
        nl: 'Word lid van onze reiscommunity en deel uw ervaringen en vakantieverslagen',
        zh: '加入我们的旅行社区，分享您的体验和假期报告'
      },
      JoinTravelp1: {
        en: 'Regardless of whether it is the Baltic Sea, North Sea, Lake Garda or the Alps - we will take you with us and bring your travel dreams to the road. In our travel reports you will find an overview of the places that we have traveled with our customers. Over time, many wonderful destinations and travel reports will be added here.',
        de: 'Egal ob Ostsee, Nordsee, Gardasee, oder das Alpenland - wir nehmen Dich mit und bringen Reiseträume auf die Straße. In unseren Reiseberichten findest du eine Übersicht der Orte, die wir gemeinsam mit unseren Kunden bereist haben. Mit der Zeit werden hier noch viele wunderbare Destinationen und Reiseberichte hinzukommen.',
        nl: 'Of het nu de Oostzee, de Noordzee, het Gardameer of de Alpen is - wij nemen u mee en brengen uw reisdromen op de weg. In onze reisverslagen vindt u een overzicht van de plaatsen waar wij met onze klanten hebben gereisd. In de loop van de tijd zullen hier vele prachtige bestemmingen en reisverslagen worden toegevoegd.',
        zh: '无论是波罗的海、北海、加尔达湖还是阿尔卑斯山——我们都将带您同行，将您的旅行梦想带上旅途。 在我们的旅行报告中，您会找到我们与客户一起旅行的地方的概览。 随着时间的推移，这里将添加许多精彩的目的地和旅行报告。'
      },
      JoinTravelp2: {
        en: 'CamperGold is one of the fastest growing providers of motorhome brokerage in Germany. With many vehicles, CamperGold has a steadily growing fleet of mobile homes in Germany and offers a wide range of possible uses for holidays, tours, festivals and events.',
        de: 'CamperGold ist in Deutschland einer der am schnellsten wachsenden Anbieter in der Vermittlung von Wohnmobilen. Mit vielen Fahrzeugen verfügt CamperGold über eine stetig wachsende Flotte von Wohnmobilien in Deutschland und bietet eine große Auswahl an Nutzungsmöglichkeiten für Urlaub, Touren, Festivals und Event.',
        nl: 'CamperGold is een van de snelst groeiende aanbieders van camperbemiddeling in Duitsland. Met veel voertuigen heeft CamperGold een gestaag groeiende vloot van stacaravans in Duitsland en biedt het een breed scala aan gebruiksmogelijkheden voor vakanties, reizen, festivals en evenementen.',
        zh: 'CamperGold 是德国增长最快的房车经纪服务提供商之一。 CamperGold 拥有众多车辆，在德国拥有稳定增长的移动房屋车队，并为假期、旅游、节日和活动提供广泛的可能用途。'
      },
      BookYourCamperNow: {
        en: 'Book Your Camper Now',
        de: 'Jetzt Camper Buchen',
        nl: 'Boek nu uw camper',
        zh: '立即预订您的露营车'
      },
      Testimonials: {
        en: 'Testimonials',
        de: 'Zeugnisse',
        nl: 'Getuigenissen',
        zh: '感言'
      },
      Blog: {
        en: 'Blog',
        de: 'Blog',
        nl: 'Blog',
        zh: '博客'
      },
      BlogSub: {
        en: 'What\'s new from CamperGold',
        de: 'Was ist neu bei CamperGold?',
        nl: 'Wat is er nieuw van CamperGold?',
        zh: 'Camper Gold 的新功能'
      },
      Admin: {
        en: 'Admin',
        de: 'Administratorin',
        nl: 'beheerder',
        zh: '行政'
      },
      ImpressumHeading: {
        en: 'Imprint',
        de: 'Impressum',
        nl: 'Afdruk',
        zh: '印记'
      },
      EUDisputeResolution: {
        en: 'EU-Dispute Resolution',
        de: 'EU-Streitschlichtung',
        nl: 'EU-geschillenbeslechting',
        zh: '欧盟争端解决'
      },
      TheEuropeanCommission: {
        en: 'The European Commission provides a Platform for Online Dispute Resolution (OS)::',
        de: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit::',
        nl: 'De Europese Commissie biedt een platform voor onlinegeschillenbeslechting (OS)',
        zh: '欧盟委员会为在线争议解决 (OS) 提供平台'
      },
      OurEmail: {
        en: 'You can find our Email Address in the Imprint above.',
        de: 'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
        nl: 'U vindt ons e-mailadres in de opdruk hierboven.',
        zh: '您可以在上面的版本说明中找到我们的电子邮件地址。'
      },
      ConsumerDisputeResolution: {
        en: 'Consumer Dispute Resolution /Universal Arbitration Board',
        de: 'Verbraucherstreitbeilegung /Universalschlichtungsstelle',
        nl: 'Beslechting van consumentengeschillen/universele arbitragecommissie',
        zh: '消费者争议解决/环球仲裁委员会'
      },
      ConsumerDisputeResolutionp1: {
        en: 'We participate in a dispute resolution procedure before a consumer arbitration board. Responsible is the universal arbitration board of the Zentrum für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein',
        de: 'Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zuständig ist die Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein',
        nl: 'We nemen deel aan een geschillenbeslechtingsprocedure voor een arbitragecommissie voor consumenten. Verantwoordelijk is de universele arbitragecommissie van het Zentrum für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein',
        zh: '我们参与消费者仲裁委员会之前的争议解决程序。 负责的是 Zentrum für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein 的通用仲裁委员会'
      },
      LiabilityForContents: {
        en: 'Liability for Contents',
        de: 'Haftung für Inhalte',
        nl: 'Aansprakelijkheid voor inhoud',
        zh: '内容责任'
      },
      LiabilityForContentsp1: {
        en: 'As a service provider, we are responsible for our own content on these pages in accordance with § 7 para.1 TMG under the general laws. According to §§ 8 to 10 TMG we are not obligated to monitor transmitted or stored information or to investigate circumstances that indicate illegal activity.',
        de: 'Als Dienste Anbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienste Anbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen',
        nl: 'Als dienstverlener zijn wij verantwoordelijk voor onze eigen inhoud op deze pagina\'s in overeenstemming met § 7 lid 1 TMG onder de algemene wetten. Volgens §§ 8 tot 10 TMG zijn wij niet verplicht om verzonden of opgeslagen informatie te controleren of omstandigheden te onderzoeken die wijzen op illegale activiteiten.',
        zh: '作为服务提供商，我们根据一般法律第 7 条第 1 段 TMG 对这些页面上我们自己的内容负责。 根据 §§ 8 至 10 TMG，我们没有义务监控传输或存储的信息或调查表明非法活动的情况。'
      },
      LiabilityForContentsp2: {
        en: 'Obligations to remove or block the use of Information under the general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove the relevant content immediately.',
        de: 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
        nl: 'Verplichtingen tot het verwijderen of blokkeren van het gebruik van Informatie onder de algemene wetten blijven onaangetast. Aansprakelijkheid ter zake is echter pas mogelijk vanaf het moment dat een concrete wetsovertreding bekend wordt. Als we kennis krijgen van dergelijke inbreuken, zullen we de relevante inhoud onmiddellijk verwijderen.',
        zh: '根据一般法律删除或阻止使用信息的义务不受影响。 然而，这方面的责任只能从已知具体违法行为的时间点开始。 如果我们发现任何此类侵权行为，我们将立即删除相关内容。'
      },
      LiabilityForLinks: {
        en: 'Liability for Links',
        de: 'Haftung für Links',
        nl: 'Aansprakelijkheid voor links',
        zh: '链接的责任'
      },
      LiabilityForLinksp1: {
        en: 'Our Offer contains links to external Websites of third parties, whose contents we have no influence on. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. No illegal content was identifiable at the time of linking.',
        de: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
        nl: 'Ons aanbod bevat links naar externe websites van derden, op wiens inhoud wij geen invloed hebben. Daarom kunnen wij voor deze externe inhoud geen aansprakelijkheid aanvaarden. De respectievelijke aanbieder of exploitant van de pagina\'s is altijd verantwoordelijk voor de inhoud van de gelinkte pagina\'s. De gelinkte pagina\'s werden op het moment van linken gecontroleerd op mogelijke juridische overtredingen. Er was geen illegale inhoud herkenbaar op het moment van linken.',
        zh: '我们的报价包含指向第三方外部网站的链接，我们对其内容没有影响。 因此，我们不对这些外部内容承担任何责任。 页面的相应提供商或运营商始终对链接页面的内容负责。 在链接时检查链接页面是否存在可能的违法行为。 链接时没有可识别的非法内容。'
      },
      LiabilityForLinksp2: {
        en: 'However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.',
        de: 'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
        nl: 'Een permanente controle van de inhoud van de gelinkte pagina\'s is echter niet redelijk zonder concreet bewijs van een overtreding van de wet. Als we inbreuken vaststellen, zullen we dergelijke links onmiddellijk verwijderen.',
        zh: '但是，如果没有具体的违法证据，对链接页面的内容进行永久控制是不合理的。 如果我们发现任何侵权行为，我们将立即删除此类链接。'
      },
      Copyrightp1: {
        en: 'The contents and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.',
        de: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
        nl: 'De inhoud en werken die door de site-exploitanten op deze pagina\'s zijn gemaakt, zijn onderworpen aan het Duitse auteursrecht. Voor duplicatie, verwerking, distributie of enige vorm van commercialisering van dergelijk materiaal buiten de reikwijdte van de auteursrechtwet is de voorafgaande schriftelijke toestemming van de respectieve auteur of maker vereist. Downloads en kopieën van deze site zijn alleen toegestaan voor privé, niet-commercieel gebruik.',
        zh: '网站运营商在这些页面上创建的内容和作品受德国版权法的约束。 超出版权法范围的对此类材料的复制、处理、分发或任何形式的商业化应事先获得其各自作者或创作者的书面同意。 本网站的下载和副本仅允许用于私人、非商业用途。'
      },
      Copyrightp2: {
        en: 'Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.',
        de: 'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
        nl: 'Voor zover de inhoud op deze site niet door de exploitant is gemaakt, worden de auteursrechten van derden gerespecteerd. In het bijzonder wordt inhoud van derden als zodanig geïdentificeerd. Mocht u desondanks kennis krijgen van een inbreuk op het auteursrecht, dan verzoeken wij u ons hiervan op de hoogte te stellen. Als we inbreuken vaststellen, zullen we dergelijke inhoud onmiddellijk verwijderen.',
        zh: '如果本网站上的内容不是由运营商创建的，则尊重第三方的版权。 特别是，第三方内容被标识为这样。 如果您仍然意识到侵犯版权，请相应地通知我们。 如果我们发现任何侵权行为，我们将立即删除此类内容。'
      },
      Source: {
        en: 'Source',
        de: 'Quelle',
        nl: 'Bron',
        zh: '来源'
      },
      Free100: {
        en: '100% Free / No Fees',
        de: '100% Kostenlos / Keine Gebühren',
        nl: '100% gratis / geen kosten',
        zh: '100% 免费/不收费'
      },
      Profit100: {
        en: '100% Profit, No Fees',
        de: '100% Profit Keine Gebühren',
        nl: '100% winst, geen kosten',
        zh: '100% 利润，无费用'
      },
      threeEasySteps: {
        en: 'Become a CamperGold landlord in three easy steps',
        de: 'In drei einfachen Schritten Vermieter bei CamperGold werden',
        nl: 'Word CamperGold verhuurder in drie eenvoudige stappen',
        zh: '通过三个简单的步骤成为 Camper Gold 房东'
      },
      threeEasyStepsSubheading: {
        en: 'Become a renter with CamperGold and rent out your camper easily and securely through our rental platform.',
        de: 'Werden Sie Vermieter bei CamperGold und vermieten Sie ihren Camper einfach und sicher über unsere Vermietplattform.',
        nl: 'Word huurder bij CamperGold en verhuur uw camper eenvoudig en veilig via ons verhuurplatform.',
        zh: '成为 Camper Gold 的租赁者，并通过我们的租赁平台轻松安全地出租您的露营车。'
      },
      threeEasySteps1: {
        en: '1. Create your advertisement for free in just 2 minutes',
        de: '1. Erstellen Sie Ihre Anzeige kostenlos in nur 2 Minuten',
        nl: '1. Maak uw advertentie gratis in slechts 2 minuten',
        zh: '1. 只需 2 分钟即可免费制作您的广告'
      },
      threeEasySteps2: {
        en: '2. You decide the rental price and the availability of your camper',
        de: '2. Sie bestimmen den Mietpreis und die Verfügbarkeit von Ihren Camper',
        nl: '2. U bepaalt de huurprijs en de beschikbaarheid van uw camper',
        zh: '2.您决定租赁价格和露营车的可用性'
      },
      threeEasySteps3: {
        en: '3. The rental inquiries for your camper are initially non-binding, if you have a good feeling sent the rent a binding offer and you can start',
        de: '3. Die Mietanfragen für Ihren Camper sind zunächst unverbindlich, wenn Sie ein gutes Gefühl haben senden Sie dem Mieter ein verbindliches Angebot und es kann losgehen',
        nl: '3. De huuraanvragen voor uw camper zijn in eerste instantie vrijblijvend, als u een goed gevoel heeft stuurt u de huur een bindende offerte en kunt u aan de slag',
        zh: '3. 您的露营者的租金查询最初是不具有约束力的，如果您感觉良好，则向租金发送具有约束力的报价，您可以开始'
      },
      EmailVerified: {
        en: 'Email successfully confirmed',
        de: 'E-Mail erfolgreich bestätigt',
        nl: 'E-mail succesvol bevestigd',
        zh: '电子邮件成功确认'
      },
      EmailVerifiedFail: {
        en: 'Email confirmation failed',
        de: 'E-Mail-Bestätigung fehlgeschlagen',
        nl: 'E-mailbevestiging mislukt',
        zh: '电子邮件确认失败'
      },
      CamperAccessories: {
        en: 'Camper Accessories',
        de: 'Camper Zubehör',
        nl: 'Camperaccessoires',
        zh: '露营车配件'
      },
      CamperInvestment: {
        en: 'Camper Investment',
        de: 'Camper Investment',
        nl: 'Camper Investering',
        zh: '露营投资'
      },
      PleaseSelectImage: {
        en: 'Please select image',
        de: 'Bitte Bild auswählen',
        nl: 'Selecteer afbeelding',
        zh: '请选择图片'
      },
      NoMoreImagesAvailable: {
        en: 'No more images available',
        de: 'Keine Bilder mehr verfügbar',
        nl: 'Geen afbeeldingen meer beschikbaar',
        zh: '没有更多可用的图像'
      },
      CamperIsNotAvailableForSelectedDates: {
        en: 'Camper is not available for selected dates',
        de: 'Wohnmobil ist für ausgewählte Daten nicht verfügbar',
        nl: 'Camper is niet beschikbaar voor geselecteerde data',
        zh: '露营车不适用于所选日期'
      },
      TrustedLenders: {
        en: 'Trusted lenders',
        de: 'Vertrauenswürdige Kreditgeber',
        nl: 'Betrouwbare kredietverstrekkers',
        zh: '受信任的贷方'
      },
      NoAdditionalCosts: {
        en: 'No additional cost',
        de: 'Keine zusätzlichen Kosten',
        nl: 'Geen extra kosten',
        zh: '无额外费用'
      },
      ExtraEquipmentAvailableToBuy: {
        en: 'Extra equipment available to buy',
        de: 'Zusätzliche Ausrüstung zum Kauf verfügbar',
        nl: 'Extra uitrusting beschikbaar om te kopen',
        zh: '可以购买额外的设备'
      },
      NoWorriesNoObligations: {
        en: 'No worries, no obligations',
        de: 'Keine Sorgen, keine Verpflichtungen',
        nl: 'Geen zorgen, geen verplichtingen',
        zh: '无后顾之忧，无义务'
      },
      FooterText: {
        en: 'Register now for our newsletter and find out everything about our wide range of possible uses for holidays, tours, festivals and events.',
        de: 'Melde dich jetzt für unseren Newsletter an und erfahre alles über unsere große Auswahl an Nutzungsmöglichkeiten für Urlaub, Touren, Festivals und Events.',
        nl: 'Schrijf u nu in voor onze nieuwsbrief en kom alles te weten over ons brede scala aan gebruiksmogelijkheden voor vakanties, tours, festivals en evenementen.',
        zh: '立即注册我们的时事通讯，了解我们在假期、旅游、节日和活动中的广泛用途。'
      },
      AddonTitle: {
        en: 'Addons',
        de: 'Addons',
        nl: 'Add-ons',
        zh: '插件'
      },
      Addon: {
        en: 'Addon',
        de: 'Addon',
        nl: 'Toevoegen',
        zh: '插件'
      },
      AddonDes: {
        en: 'Addons Description',
        de: 'Addons Description',
        nl: 'Beschrijving van add-ons',
        zh: '插件说明'
      },
      AddAddonTitle: {
        en: 'Add Addons',
        de: 'Add Addons',
        nl: 'Add-ons toevoegen',
        zh: '添加插件'
      },
      AddAddonDes: {
        en: 'Add Addons Description',
        de: 'Add Addons Description',
        nl: 'Add-ons Beschrijving toevoegen',
        zh: '添加插件说明'
      },
      EditAddonTitle: {
        en: 'Edit Addons',
        de: 'Edit Addons',
        nl: 'Add-ons bewerken',
        zh: '编辑插件'
      },
      EditAddonDes: {
        en: 'Edit Addons Description',
        de: 'Edit Addons Description',
        nl: 'Beschrijving van add-ons bewerken',
        zh: '编辑插件描述'
      },
      CategoryTitle: {
        en: 'Category',
        de: 'Category',
        nl: 'Categorie',
        zh: '类别'
      },
      CategoryDes: {
        en: 'Category Description',
        de: 'Category Description',
        nl: 'Categorie beschrijving',
        zh: '类别说明'
      },
      AddCategoryTitle: {
        en: 'Add Category',
        de: 'Add Category',
        nl: 'categorie toevoegen',
        zh: '添加类别'
      },
      AddCategoryDes: {
        en: 'Add Category Description',
        de: 'Add Category Description',
        nl: 'Categoriebeschrijving toevoegen',
        zh: '添加类别说明'
      },
      Checkout: {
        en: 'Checkout',
        de: 'Checkout',
        nl: 'Uitchecken',
        zh: '查看'
      },
      EditCategoryTitle: {
        en: 'Edit Category',
        de: 'Edit Category',
        nl: 'Categorie bewerken',
        zh: '编辑类别'
      },
      EditCategoryDes: {
        en: 'Edit Category Description',
        de: 'Edit Category Description',
        nl: 'Categoriebeschrijving bewerken',
        zh: '编辑类别描述'
      },
      BlogTitle: {
        en: 'Blog',
        de: 'Blog',
        nl: 'Blog',
        zh: '博客'
      },
      BlogDes: {
        en: 'Blog Description',
        de: 'Blog Description',
        nl: 'Blogbeschrijving',
        zh: '博客描述'
      },
      AddBlogTitle: {
        en: 'Add Blog',
        de: 'Add Blog',
        nl: 'Blog toevoegen',
        zh: '添加博客'
      },
      AddBlogDes: {
        en: 'Add Blog Description',
        de: 'Add Blog Description',
        nl: 'Blogbeschrijving toevoegen',
        zh: '添加博客描述'
      },
      BookingsTitle: {
        en: 'Bookings',
        de: 'Bookings',
        nl: 'Boekingen',
        zh: '预订'
      },
      BookingsDes: {
        en: 'Booking Description',
        de: 'Booking Description',
        nl: 'Boekingsbeschrijving',
        zh: '预订说明'
      },
      CancelBookingsTitle: {
        en: 'Cancel Bookings',
        de: 'Cancel Bookings',
        nl: 'Annuleer boekingen',
        zh: '取消预订'
      },
      CancelBookingsDes: {
        en: 'Cancel Booking Description',
        de: 'Cancel Booking Description',
        nl: 'Annuleer boekingsbeschrijving',
        zh: '取消预订说明'
      },
      CamperTypeTitle: {
        en: 'Camper Type',
        de: 'Camper Type',
        nl: 'Campertype',
        zh: '露营车类型'
      },
      CamperTypeDes: {
        en: 'Camper Type Description',
        de: 'Camper Type Description',
        nl: 'Campertype Beschrijving',
        zh: '露营车类型说明'
      },
      AddCamperTypeTitle: {
        en: 'Add Camper Type',
        de: 'Add Camper Type',
        nl: 'Campertype toevoegen',
        zh: '添加露营者类型'
      },
      AddCamperTypeDes: {
        en: 'Add Camper Type Description',
        de: 'Add Camper Type Description',
        nl: 'Beschrijving campertype toevoegen',
        zh: '添加露营车类型说明'
      },
      EditCamperTypeTitle: {
        en: 'Edit Camper Type',
        de: 'Edit Camper Type',
        nl: 'Campertype bewerken',
        zh: '编辑露营者类型'
      },
      EditCamperTypeDes: {
        en: 'Edit Camper Type Description',
        de: 'Edit Camper Type Description',
        nl: 'Bewerk beschrijving campertype',
        zh: '编辑露营者类型说明'
      },
      CamperTitle: {
        en: 'Camper',
        de: 'Camper',
        nl: 'Camper',
        zh: '露营车'
      },
      CamperDes: {
        en: 'Camper  Description',
        de: 'Camper  Description',
        nl: 'Camperbeschrijving',
        zh: '露营车说明'
      },
      AddCamperTitle: {
        en: 'Add Camper ',
        de: 'Add Camper ',
        nl: 'Add Camper',
        zh: '添加露营车'
      },
      AddCamperDes: {
        en: 'Add Camper Description',
        de: 'Add Camper Description',
        nl: 'Camperbeschrijving toevoegen',
        zh: '添加露营者说明'
      },
      EditCamperTitle: {
        en: 'Edit Camper',
        de: 'Edit Camper',
        nl: 'Camper bewerken',
        zh: '编辑露营车'
      },
      EditCamperDes: {
        en: 'Edit Camper  Description',
        de: 'Edit Camper  Description',
        nl: 'Camperbeschrijving bewerken',
        zh: '编辑露营者描述'
      },
      CityTitle: {
        en: 'City',
        de: 'City',
        nl: 'Stad',
        zh: '城市'
      },
      CityDes: {
        en: 'City Description',
        de: 'City Description',
        nl: 'Stad Beschrijving',
        zh: '城市描述'
      },
      AddCityTitle: {
        en: 'Add City',
        de: 'Add City',
        nl: 'Stad toevoegen',
        zh: '添加城市'
      },
      AddCityDes: {
        en: 'Add City  Description',
        de: 'Add City  Description',
        nl: 'Stadsbeschrijving toevoegen',
        zh: '添加城市描述'
      },
      EditCityTitle: {
        en: 'Edit City',
        de: 'Edit City',
        nl: 'Stad bewerken',
        zh: '编辑城市'
      },
      EditCityDes: {
        en: 'Edit City Description',
        de: 'Edit City Description',
        nl: 'Stadsbeschrijving bewerken',
        zh: '编辑城市描述'
      },
      FaqTitle: {
        en: 'FAQ',
        de: 'FAQ',
        nl: 'FAQ',
        zh: '常问问题'
      },
      FaqDes: {
        en: 'Faq Description',
        de: 'Faq Description',
        nl: 'Faq Beschrijving',
        zh: '常见问题说明'
      },
      AddFaqTitle: {
        en: 'Add Faq',
        de: 'Add Faq',
        nl: 'Faq toevoegen',
        zh: '添加常见问题'
      },
      AddFaqDes: {
        en: 'Add Faq  Description',
        de: 'Add Faq  Description',
        nl: 'Faq-beschrijving toevoegen',
        zh: '添加常见问题说明'
      },
      EditFaqTitle: {
        en: 'Edit Faq',
        de: 'Edit Faq',
        nl: 'Veelgestelde vragen bewerken',
        zh: '编辑常见问题'
      },
      EditFaqDes: {
        en: 'Edit Faq Description',
        de: 'Edit Faq Description',
        nl: 'Faq-beschrijving bewerken',
        zh: '编辑常见问题描述'
      },
      ContactsTitle: {
        en: 'Contacts',
        de: 'Contacts',
        nl: 'Contacten',
        zh: '联系人'
      },
      ContactsDes: {
        en: 'Contact Description',
        de: 'Contact Description',
        nl: 'Contact Beschrijving',
        zh: '联系方式'
      },
      CoupenTitle: {
        en: 'Coupon',
        de: 'Coupon',
        nl: 'Coupon',
        zh: '优惠券'
      },
      CoupenDes: {
        en: 'Coupon Description',
        de: 'Coupon Description',
        nl: 'Couponbeschrijving',
        zh: '优惠券说明'
      },
      AddCoupenTitle: {
        en: 'Add Coupon',
        de: 'Add Coupon',
        nl: 'Coupon toevoegen',
        zh: '添加优惠券'
      },
      AddCoupenDes: {
        en: 'Add Coupon Description',
        de: 'Add Coupon Description',
        nl: 'Voeg couponbeschrijving toe',
        zh: '添加优惠券说明'
      },
      CoustomerTitle: {
        en: 'All Customers',
        de: 'All Customers',
        nl: 'Alle klanten',
        zh: '所有客户'
      },
      CoustomerDes: {
        en: 'All Customers Description',
        de: 'All Customers Description',
        nl: 'Alle Klanten Beschrijving',
        zh: '所有客户描述'
      },
      PageTitle: {
        en: 'Pages',
        de: 'Pages',
        nl: 'Pagina\'s',
        zh: '页面'
      },
      PageDes: {
        en: 'Page Description',
        de: 'Page Description',
        nl: 'pagina beschrijving',
        zh: '页面描述'
      },
      AddPageTitle: {
        en: 'Add Page',
        de: 'Add Page',
        nl: 'Pagina toevoegen',
        zh: '添加页面'
      },
      AddPageDes: {
        en: 'Add Page Description',
        de: 'Add Page Description',
        nl: 'Paginabeschrijving toevoegen',
        zh: '添加页面描述'
      },
      EditPageTitle: {
        en: 'Edit Page',
        de: 'Edit Page',
        nl: 'Pagina bewerken',
        zh: '编辑页面'
      },
      PerNight: {
        en: 'Per Night',
        de: 'Pro Nacht',
        nl: 'Per nacht',
        zh: '每晚'
      },
      EditPageDes: {
        en: 'Edit Page Description',
        de: 'Edit Page Description',
        nl: 'Paginabeschrijving bewerken',
        zh: '编辑页面描述'
      },
      TourTitle: {
        en: 'Tours',
        de: 'Tours',
        nl: 'Tours',
        zh: '旅游'
      },
      TourDes: {
        en: 'Tour Description',
        de: 'Tour Description',
        nl: 'Tourbeschrijving',
        zh: '行程说明'
      },
      AddTourTitle: {
        en: 'Add Tour',
        de: 'Add Tour',
        nl: 'Tour toevoegen',
        zh: '添加游览'
      },
      AddTourDes: {
        en: 'Add Tour Description',
        de: 'Add Tour Description',
        nl: 'Tourbeschrijving toevoegen',
        zh: '添加游览说明'
      },
      EditTourTitle: {
        en: 'Edit Tour',
        de: 'Edit Tour',
        nl: 'Tour bewerken',
        zh: '编辑游览'
      },
      EditTourDes: {
        en: 'Edit Tour Description',
        de: 'Edit Tour Description',
        nl: 'Tourbeschrijving bewerken',
        zh: '编辑游览说明'
      },
      EditProfileTitle: {
        en: 'Edit Profile',
        de: 'Edit Profile',
        nl: 'Bewerk profiel',
        zh: '编辑个人资料'
      },
      EditProfileDes: {
        en: 'Edit Profile Description',
        de: 'Edit Profile Description',
        nl: 'Profielbeschrijving bewerken',
        zh: '编辑个人资料描述'
      },
      FooterVAIGtextLink: {
        en: 'VIB risk warning',
        de: 'Risikohinweis VIB',
        nl: 'VIB-risicowaarschuwing',
        zh: 'VIB 风险提示'
      },
      FooterVAIGtext: {
        en: 'Note in accordance with Section 12, Paragraph 2 of the Asset Management Act: <br> The acquisition of this asset is associated with considerable risks and can lead to the complete loss of the assets invested.',
        de: 'Hinweis gemäß § 12 Abs. 2 Vermögensanlagengesetz:<br>Der Erwerb dieser Vermögensanlage ist mit erheblichen Risiken verbunden und kann zum vollständigen Verlust des eingesetzten Vermögens führen.',
        nl: 'Opmerking conform 12, lid 2 van de Wet vermogensbeheer: <br> De verkrijging van dit vermogen gaat gepaard met aanzienlijke risico\'s en kan leiden tot volledig verlies van het belegde vermogen',
        zh: '根据《资产管理法》第 12 条第 2 款注意：<br> 收购该资产具有相当大的风险，可能导致所投资资产的全部损失'
      }
    }
    if (term in content) {
      const lang = context.store.getters.getLang
      if (content[term][lang]) {
        return content[term][lang]
      }
      return ''
    } else {
      return term.replace(/([A-Z])/g, ' $1')
    }
  }
  inject('langAdmin', langData)
  inject('multiLang', langData)

  const bookingStatus = (value) => {
    if (value === 0) {
      return 'Pending'
    } else if (value === 1) {
      return 'Confirmed'
    } else if (value === 2) {
      return 'Hold'
    } else if (value === 3) {
      return 'On Going'
    } else if (value === 4) {
      return 'Cancelled (Refund Initiated)'
    } else if (value === 5) {
      return 'Cancelled and Refunded'
    } else if (value === 6) {
      return 'Completed'
    } else if (value === 7) {
      return 'Awaiting Cancellation'
    }
  }
  inject('bookingStatus', bookingStatus)
}
