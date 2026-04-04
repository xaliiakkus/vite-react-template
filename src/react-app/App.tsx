import { useState } from "react";
import "./App.css";
import { 
  MessageSquare, 
  HelpCircle, 
  Gift, 
  TrendingUp, 
  Search,
  Bell,
  PlusCircle,
  MessageCircle,
  ThumbsUp,
  Eye,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const FORUM_POSTS = [
  {
    id: 1,
    user: { name: "Ahmet Y.", avatarStr: "AY", color: "#ef4444" },
    time: "2 saat önce",
    title: "%100 Hoşgeldin Bonusu Hesabıma Geçmedi",
    snippet: "Merhaba, siteye yeni üye oldum ve ilk yatırımımı 500 TL olarak gerçekleştirdim. Hoşgeldin bonusu için canlı desteğe bağlandım ancak hala hesabıma yansımadı. Yardımcı olabilir misiniz?",
    category: "Hoşgeldin Bonusu",
    status: "pending",
    stats: { replies: 12, likes: 5, views: 142 }
  },
  {
    id: 2,
    user: { name: "Caner K.", avatarStr: "CK", color: "#3b82f6" },
    time: "5 saat önce",
    title: "Kayıp Bonusu Hesaplama Mantığı Nedir?",
    snippet: "Dünkü kuponlarım yattı ve net kaybım 2000 TL civarında. %20 kayıp bonusu talep ettim fakar 300 TL eklendi. Bunun hesaplaması tam olarak nasıl yapılıyor? Sistemde mi bir hata var?",
    category: "Kayıp Bonusu",
    status: "solved",
    stats: { replies: 34, likes: 18, views: 520 }
  },
  {
    id: 3,
    user: { name: "Mehmet D.", avatarStr: "MD", color: "#10b981" },
    time: "1 gün önce",
    title: "Deneme Bonusu Çevrim Şartı Sorum",
    snippet: "Verilen 200 TL deneme bonusunu 10 katı çevirdim. Bakiyem 2500 TL oldu ancak çekim yaparken maksimum 1000 TL çekebileceğim uyarısı alıyorum. Kurallarda böyle bir şey var mı?",
    category: "Deneme Bonusu",
    status: "solved",
    stats: { replies: 8, likes: 2, views: 89 }
  },
  {
    id: 4,
    user: { name: "Selim R.", avatarStr: "SR", color: "#f59e0b" },
    time: "1 gün önce",
    title: "Doğum Günü Bonusu Ne Zaman Ekleniyor?",
    snippet: "Bugün benim doğum günüm, hesabımı onaylamıştım daha önceden. Sistem otomatik olarak mı ekleme yapıyor yoksa bir yere bildirmem mi gerekiyor?",
    category: "Özel Bonus",
    status: "pending",
    stats: { replies: 3, likes: 1, views: 45 }
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar glass-panel">
        <div className="logo-container">
          <div className="logo-icon">
            <Gift size={24} />
          </div>
          <span className="text-gradient">BonusDestek</span>
        </div>

        <nav className="nav-menu">
          <div className={`nav-item ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
            <MessageSquare size={20} />
            <span>Tüm Konular</span>
          </div>
          <div className={`nav-item ${activeTab === 'solved' ? 'active' : ''}`} onClick={() => setActiveTab('solved')}>
            <CheckCircle2 size={20} />
            <span>Çözülenler</span>
          </div>
          <div className={`nav-item ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => setActiveTab('pending')}>
            <AlertCircle size={20} />
            <span>Bekleyenler</span>
          </div>
          <div className={`nav-item ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => setActiveTab('faq')}>
            <HelpCircle size={20} />
            <span>S.S.S</span>
          </div>
          <div className={`nav-item ${activeTab === 'trending' ? 'active' : ''}`} onClick={() => setActiveTab('trending')}>
            <TrendingUp size={20} />
            <span>Popüler</span>
          </div>
        </nav>

        <div className="stats-card">
          <div className="stat-row">
            <span className="stat-label">Toplam Üye:</span>
            <span className="stat-value">12.450</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Çözülen Sorun:</span>
            <span className="stat-value" style={{color: '#10b981'}}>8.192</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Aktif Destek:</span>
            <span className="stat-value" style={{color: '#3b82f6'}}>24</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header glass-panel">
          <div className="search-bar">
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Bonus sorununu veya konusunu ara..." />
          </div>

          <div className="user-profile">
            <button className="btn-primary">
              <PlusCircle size={18} />
              Yeni Konu Aç
            </button>
            <Bell size={22} color="#94a3b8" style={{ cursor: 'pointer', marginLeft: '0.5rem' }} />
            <div className="avatar"></div>
          </div>
        </header>

        <div className="forum-header">
          <h1 className="forum-title">Bonus Destek Forumu</h1>
          <p className="forum-subtitle">Bonus işlemleriyle ilgili sorularınızı sorun, çözümler bulun ve toplulukla etkileşime geçin.</p>
        </div>

        <div className="filter-tags">
          <div className="tag active">Hepsi</div>
          <div className="tag">Hoşgeldin</div>
          <div className="tag">Kayıp Bonusu</div>
          <div className="tag">Deneme Bonusu</div>
          <div className="tag">Çevrim Şartsız</div>
          <div className="tag">Yatırım</div>
        </div>

        <div className="post-list">
          {FORUM_POSTS.map(post => (
            <div className="post-card glass-panel" key={post.id}>
              <div className="post-header">
                <div className="post-user">
                  <div className="post-avatar" style={{ backgroundColor: post.user.color }}>
                    {post.user.avatarStr}
                  </div>
                  <div className="post-meta">
                    <h4>{post.user.name}</h4>
                    <span>{post.time}</span>
                  </div>
                </div>
                <div className={`status-badge status-${post.status}`}>
                  {post.status === 'solved' ? 'Çözüldü' : 'İnceleniyor'}
                </div>
              </div>

              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.snippet}</p>
              </div>

              <div className="post-footer">
                <div className="bonus-tag">
                  <Gift size={14} />
                  {post.category}
                </div>

                <div className="post-stats">
                  <div className="stat-item">
                    <MessageCircle size={16} />
                    {post.stats.replies} Yanıt
                  </div>
                  <div className="stat-item">
                    <ThumbsUp size={16} />
                    {post.stats.likes}
                  </div>
                  <div className="stat-item">
                    <Eye size={16} />
                    {post.stats.views}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
