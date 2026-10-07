import { profile } from '../data'
import { IconUp } from './Icons'
import { useLanguage } from '../i18n/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. {t.footer.built}
        </p>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <a href="#home" className="to-top">
          {t.footer.backToTop} <IconUp width={15} height={15} />
        </a>
      </div>
    </footer>
  )
}
