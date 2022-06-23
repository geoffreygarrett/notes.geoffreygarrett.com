import re
import argparse

# define regex for css property line, color
re_line = re.compile(
    r"/\*\s(?P<property>\w*)\s\*/.*[\s;{]+(?P<key>[\w,-]*?color):\s?(?P<value>#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}))")
import os

if __name__ == "__main__":
    # target = sys.argv[1]
    # target = "../syntax.css"
    # parser = argparse.ArgumentParser(description='')
    #
    # parser.add_argument('--style', dest='style', type=list,
    #                     help='Paths of style files')
    # parser.add_argument('--name', dest='name', type=list,
    #                     help='Name of respective themes')
    # parser.add_argument('--prefix', dest='name', type=str,
    #                     help='Prefix to add to keys', default='--')
    # args = parser.parse_args()

    names = ['light', 'dark']
    styles = ['monokailight-syntax.scss', 'dracula-syntax.scss']
    prefix = '--'
    d = {}
    for style, name in zip(styles, names):
        d[name] = {}
        with open(style, 'r') as f:
            s = f.read()

            # convert to kebab case, <property>-<key>
            for m in re.finditer(re_line, s):
                prop = m.group('property')
                for j, c in enumerate(prop):
                    if c.isupper():
                        if j == 0:
                            prop = prop.replace(c, c.lower())
                        else:
                            prop = prop.replace(c, "-" + c.lower())

                k = prefix + prop + "-" + m.group('key')
                d[name][k] = m.group('value')
                print(m.group('value'))
                s = s.replace(m.group('value'), f"var({k})")
                print(f"var({k})")

        filename = os.path.basename(style)
        dir = os.path.dirname(style)
        with open(os.path.join(dir, f"var-{filename}"), 'w') as f:
            f.write(s)

    sw = ''
    for n in names:
        sw += '\n[saved-theme="{n}"] '.format(n=n) + '{'
        for kk, vv in d[n].items():
            sw += f"\n   {kk}: {vv};"
        sw += "\n}"
    with open(os.path.join(dir, 'syntax-theme.scss'), 'w') as f:
        f.write(sw)
