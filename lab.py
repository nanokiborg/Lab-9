from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy



app = Flask('Portfolio dictonary')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project_dicti.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    proj_name = db.Column(db.String(00), nullable=False)
    link = db.Column(db.String(300), nullable=False)

    def dict(self):
        return f'Project{self.id}. "{self.proj_name}" : {self.link}'


@app.route('/')
def main():
    projects = Project.query.all()
    return render_template('index1.html', projects_list=projects)


@app.route('/add', methods=['POST'])
def add_product():
    data = request.json
    project = Project(**data)
    db.session.add(project)
    db.session.commit()

    global projects
    id_last = projects[-1]['id']
    id_new = id_last + 1
    data['id'] = id_new
    projects.append(data)
    return 'OK'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
