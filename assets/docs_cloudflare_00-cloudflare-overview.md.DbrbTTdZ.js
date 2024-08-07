import{_ as e,c as a,o,a6 as t}from"./chunks/framework.DmJO695r.js";const r="/aws/images/image8.png",i="/aws/images/image51.png",s="/aws/images/image46.png",l="/aws/images/image9.png",n="/aws/images/image33.png",w=JSON.parse('{"title":"Getting Started with Cloudflare","description":"","frontmatter":{},"headers":[],"relativePath":"docs/cloudflare/00-cloudflare-overview.md","filePath":"docs/cloudflare/00-cloudflare-overview.md","lastUpdated":1723051296000}'),d={name:"docs/cloudflare/00-cloudflare-overview.md"},u=t('<h1 id="getting-started-with-cloudflare" tabindex="-1">Getting Started with Cloudflare <a class="header-anchor" href="#getting-started-with-cloudflare" aria-label="Permalink to &quot;Getting Started with Cloudflare&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Cloudflare is a web infrastructure and website security company that provides content delivery network (CDN) services, DDoS mitigation, Internet security, and distributed domain name server services. Cloudflare&#39;s services help improve website performance, security, and reliability by caching content, protecting against cyber threats, and optimizing traffic routing.</p><p>In this guide, you will learn how to manage domains with Cloudflare, customize your DNS settings, set up free SSL certificates, and more.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before you get started, you will need the following:</p><ul><li>A Cloudflare account</li><li>A domain name that you want to manage with Cloudflare</li><li>Access to your domain registrar&#39;s DNS settings</li></ul><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><h3 id="step-1-create-a-cloudflare-account" tabindex="-1">Step 1: Create a Cloudflare Account <a class="header-anchor" href="#step-1-create-a-cloudflare-account" aria-label="Permalink to &quot;Step 1: Create a Cloudflare Account&quot;">​</a></h3><p>If you don&#39;t already have a Cloudflare account, you can create one by visiting the <a href="https://www.cloudflare.com/" target="_blank" rel="noreferrer">Cloudflare website</a> and signing up for an account. You will need to provide your email address and create a password to create an account.</p><details class="details custom-block"><summary>Existing Domain</summary><h3 id="add-your-domain-to-cloudflare" tabindex="-1">Add Your Domain to Cloudflare <a class="header-anchor" href="#add-your-domain-to-cloudflare" aria-label="Permalink to &quot;Add Your Domain to Cloudflare&quot;">​</a></h3><p>Once you have created a Cloudflare account, you can add your domain to Cloudflare by following these steps:</p><ol><li>Log in to your Cloudflare account.</li><li>Click on the &quot;Add a Site&quot; button in the Cloudflare dashboard.</li><li>Enter your domain name in the &quot;Enter your domain&quot; field and click the &quot;Add Site&quot; button.</li><li>Cloudflare will scan your domain&#39;s DNS records and display them in the Cloudflare dashboard. Review the DNS records and click the &quot;Continue&quot; button to proceed.</li></ol><h3 id="update-your-domain-s-nameservers" tabindex="-1">Update Your Domain&#39;s Nameservers <a class="header-anchor" href="#update-your-domain-s-nameservers" aria-label="Permalink to &quot;Update Your Domain&#39;s Nameservers&quot;">​</a></h3><p>After adding your domain to Cloudflare, you will need to update your domain&#39;s nameservers to point to Cloudflare&#39;s nameservers. To do this, follow these steps:</p><ol><li>Log in to your domain registrar&#39;s website.</li><li>Navigate to the DNS settings for your domain.</li></ol><blockquote><p>The location of the DNS settings may vary depending on your domain registrar. Look for an option to manage your domain&#39;s nameservers or DNS settings.</p></blockquote><ol start="3"><li><p>Update your domain&#39;s nameservers to the nameservers provided by Cloudflare. Cloudflare will display the nameservers you need to use in the Cloudflare dashboard.</p></li><li><p>Save your changes and wait for the DNS changes to propagate. This process can take up to 24 hours to complete.</p></li></ol></details><p>If you don&#39;t have an existing domain, you can register a new domain through Cloudflare by following these steps:</p><details class="details custom-block"><summary>New Domain</summary><h3 id="register-a-new-domain" tabindex="-1">Register a New Domain <a class="header-anchor" href="#register-a-new-domain" aria-label="Permalink to &quot;Register a New Domain&quot;">​</a></h3><ol><li>Log in to your Cloudflare account.</li><li>Click on the &quot;Register a Domain&quot; button in the Cloudflare dashboard.</li><li>Enter the domain name you want to register and click the &quot;Search&quot; button to check domain availability.</li><li>If the domain is available, follow the prompts to complete the domain registration process.</li></ol><blockquote><p>Note: Domain registration fees may apply. Cloudflare offers domain registration services in addition to DNS management and security services.</p></blockquote><ol start="5"><li>Once your domain is registered, you can manage it through the Cloudflare dashboard.</li></ol></details><h3 id="step-2-customize-your-dns-settings" tabindex="-1">Step 2: Customize Your DNS Settings <a class="header-anchor" href="#step-2-customize-your-dns-settings" aria-label="Permalink to &quot;Step 2: Customize Your DNS Settings&quot;">​</a></h3><p>After adding your domain to Cloudflare, you can customize your DNS settings to optimize your website&#39;s performance and security. Cloudflare provides a range of DNS management features, including:</p><ul><li>A records: Map domain names to IPv4 addresses</li><li>AAAA records: Map domain names to IPv6 addresses</li><li>CNAME records: Create aliases for domain names</li><li>MX records: Configure mail servers for your domain</li><li>TXT records: Add text records for verification or other purposes</li></ul><p>To customize your DNS settings in Cloudflare, follow these steps:</p><p><img src="'+r+'" alt="image"></p><ol><li>Navigate to the &quot;DNS&quot; tab in the Cloudflare dashboard.</li></ol><p><img src="'+i+'" alt="image"></p><ol start="2"><li>Add new DNS records or edit existing records to configure your domain&#39;s DNS settings.</li></ol><p><img src="'+s+'" alt="image"></p><p><img src="'+l+'" alt="image"></p><blockquote><p>Note: The name field for <code>A</code> records is tied to the subdomain for the site you are managing. The value field should be the IP address of the server hosting the website eg. (<em>ec2 ip-address</em>).</p></blockquote><p><img src="'+n+'" alt="image"></p><ol start="3"><li>Save your changes and wait for the DNS changes to propagate. Changes to DNS records can take anywhere from 5 minutes to 24 hours to take effect. You can use tools like <code>dig</code> or <code>nslookup</code> to verify that your DNS records are configured correctly.</li></ol>',26),c=[u];function m(h,p,g,f,y,v){return o(),a("div",null,c)}const C=e(d,[["render",m]]);export{w as __pageData,C as default};
